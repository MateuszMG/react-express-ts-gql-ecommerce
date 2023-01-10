import { Context } from '../../types/context';
import { createAccessToken, createRefreshToken } from '../../utils/jwt';
import { LoginInput, RegisterInput } from './inputs';
import { UserContents, UserRoles, UserModel } from './model';
import * as bcrypt from 'bcrypt';

export class AuthService {
  async login(input: LoginInput) {
    const user = await UserModel.findOne({ email: input.email });
    if (!user) throw 'Error';

    const isMatch = await bcrypt.compare(input.password, user.password);
    if (!isMatch) throw 'Error';

    const { _id, username, email, roles } = user;
    const accessToken = createAccessToken({ _id, username, email, roles });

    await UserModel.findByIdAndUpdate(_id, { accessToken });

    return { accessToken };
  }

  async register(input: RegisterInput) {
    const { username, email, password, confirmPassword } = input;
    if (password !== confirmPassword) throw 'Error';

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await new UserModel<UserContents>({
      username,
      email,
      password: hashPassword,
      roles: [UserRoles.USER, UserRoles.MODERATOR, UserRoles.ADMINISTRATOR],
      accessToken: '',
      refreshToken: '',
      basket: [],
      purchaseHistory: [],
    }).save();

    const refreshToken = createRefreshToken({
      _id: newUser._id,
      username: newUser.username,
      roles: newUser.roles,
      email: newUser.email,
    });

    const accessToken = createAccessToken({
      _id: newUser._id,
      username: newUser.username,
      roles: newUser.roles,
      email: newUser.email,
    });

    await UserModel.findByIdAndUpdate(
      { _id: newUser._id },
      { accessToken, refreshToken },
    );

    return { accessToken };
  }

  async logout(input: Context) {
    const _id = input.req.user?._id;

    await UserModel.findByIdAndUpdate(_id, { accessToken: '' });

    return null;
  }
}

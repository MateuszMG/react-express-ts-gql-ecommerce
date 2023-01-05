import { createAccessToken, createRefreshToken } from '../../utils/jwt.utils';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginInput, RegisterInput } from './auth.input';
import { Model } from 'mongoose';
import { User, UserDocument, UserRoles } from './auth.model';
import * as bcrypt from 'bcrypt';
import Ctx from 'src/types/context.type';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async login(input: LoginInput) {
    const user = await this.userModel.findOne({ email: input.email });
    if (!user) throw 'Error';

    const isMatch = await bcrypt.compare(input.password, user?.password);
    if (!isMatch) throw 'Error';

    const { id, username, email, roles } = user;
    const accessToken = createAccessToken({ id, username, email, roles });

    await this.userModel.findByIdAndUpdate(id, { accessToken });

    return { accessToken };
  }

  async register(input: RegisterInput) {
    const { username, email, password, confirmPassword } = input;
    if (password !== confirmPassword) throw 'Error';

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await new this.userModel({
      username,
      email,
      password: hashPassword,
      roles: [UserRoles.USER],
      accessToken: '',
      refreshToken: '',
      basket: { products: [] },
    }).save();

    const refreshToken = createRefreshToken({
      id: newUser.id,
      username: newUser.username,
      roles: newUser.roles,
      email: newUser.email,
    });

    const accessToken = createAccessToken({
      id: newUser.id,
      username: newUser.username,
      roles: newUser.roles,
      email: newUser.email,
    });

    await this.userModel.findByIdAndUpdate(
      { _id: newUser._id },
      { accessToken, refreshToken },
    );

    return { accessToken };
  }

  async logout(input: Ctx) {
    const id = input.req.user.id;

    await this.userModel.findByIdAndUpdate(id, { accessToken: '' });

    return null;
  }
}

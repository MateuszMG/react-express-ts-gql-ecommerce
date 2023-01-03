import { useAuth } from '../../hooks/useAuth';
import { paths } from '../../routes/paths';
import { separateString } from '../../helpers/strings';
import { useNavigate } from 'react-router-dom';
import {
  AuthLinksWrapper,
  Link,
  LinksWrapper,
  List,
  LogoutIcon,
  Nav,
  PersonIcon,
} from './Navigation.styled';

interface NavigationLinkProps {
  path: string;
}

const NavigationLink = ({ path }: NavigationLinkProps) => (
  <Link to={path}>{path === '/' ? 'Home' : separateString(path.slice(1))}</Link>
);

export const Navigation = () => {
  const { logout, user, isLogged, isMod } = useAuth();
  const navigate = useNavigate();

  return (
    <Nav>
      <List>
        <NavigationLink path={paths.home} />

        <LinksWrapper>
          {isMod && <NavigationLink path={paths.products} />}
          {isMod && <NavigationLink path={paths.categories} />}
        </LinksWrapper>

        <AuthLinksWrapper>
          {isLogged ? (
            <>
              <PersonIcon onClick={() => navigate(paths.profile)} />
              <LogoutIcon onClick={() => logout()} />
            </>
          ) : (
            <>
              <NavigationLink path={paths.login} />
              <NavigationLink path={paths.register} />
            </>
          )}
        </AuthLinksWrapper>
      </List>
    </Nav>
  );
};
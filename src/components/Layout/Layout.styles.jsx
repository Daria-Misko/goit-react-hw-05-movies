import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 16px;
`;

const Header = styled.header`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  /* gap: 12px; */
  padding: 8px 0;
  margin-bottom: 15px;
`;
const Nav = styled.nav`
  display: flex;
  gap: 12px;
  /* align-items: center;
  justify-content: center; */
`;
const StyledLink = styled(NavLink)`
  width: 150px;
  padding: 8px 16px;
  border: 3px solid var(--brown);
  background-color: var(--cream);
  color: var(--brown);
  border-radius: 50px;
  :hover {
    background-color: var(--brown);
    color: var(--cream);
  }
  &.active {
    background-color: var(--brown);
    color: var(--hover);
  }
`;

export { Container, Header, StyledLink, Nav };

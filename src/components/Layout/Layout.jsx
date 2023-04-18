const { Suspense } = require('react');
const { Outlet } = require('react-router-dom');
const { Container, Header, StyledLink, Nav } = require('./Layout.styles');

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;

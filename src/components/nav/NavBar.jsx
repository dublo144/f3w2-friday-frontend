import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const NavBar = () => {
  const {
    user: { isAuthenticated, name, authenticateRole },
    signOut
  } = useAuth();

  const handleLoginLogOut = () => {
    return isAuthenticated ? (
      <Menu.Item position='right'>
        <Button
          content={name}
          icon='user'
          primary
          style={{ marginRight: '0.5em' }}
        />
        <Button onClick={signOut}>Log out</Button>
      </Menu.Item>
    ) : (
      <>
        <Menu.Item position='right'>
          <Button
            as={Link}
            to='/signup'
            primary
            style={{ marginRight: '0.5em' }}
          >
            Sign Up
          </Button>
          <Button as={Link} to='/login'>
            Log in
          </Button>
        </Menu.Item>
      </>
    );
  };

  return (
    <Menu>
      <Container>
        <Menu.Item as={NavLink} exact to='/' name='home'>
          Home (All)
        </Menu.Item>

        <Menu.Item as={NavLink} to='/jokes' name='jokes'>
          Jokes (Users +)
        </Menu.Item>

        {authenticateRole('admin') && (
          <Menu.Item as={NavLink} to='/webscraper' name='webscraper'>
            Webscraper (Admin)
          </Menu.Item>
        )}

        {handleLoginLogOut()}
      </Container>
    </Menu>
  );
};

export default NavBar;

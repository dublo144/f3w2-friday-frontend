import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';

const Home = () => {
  return (
    <>
      <Header as='h2' attached='top' textAlign='center'>
        Friday Assignment - Mads Brandt
      </Header>
      <Segment attached raised style={{ height: '100vh' }}>
        <p>
          So... This is the Friday Assignment which also works as the README for
          the rest of the week
        </p>
        <Header as='h3' dividing>
          Assignments during the week
        </Header>
        <Header as='h5'>
          Monday - React Router - Everything you need to know
        </Header>
        <List>
          <List.Item>
            <List.Icon name='book' />
            <List.Content>
              <a
                href='https://docs.google.com/document/d/1WEtTJ8rHr84h6uLP5nPeB0wSaAJ0FywoEeFTWRVkc9E/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Opgavebeskrivelse
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' />
            <List.Content>
              <a
                href='https://github.com/dublo144/3sem-f3w2/tree/master/day1/day1'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </List.Content>
          </List.Item>
        </List>

        <Header as='h5'>Tuesday / Wednesday - Exercises Security</Header>
        <List>
          <List.Item>
            <List.Icon name='book' />
            <List.Content>
              <a
                href='https://docs.google.com/document/d/1J0pLlU-9iLoVn_yqt5RnJ_nsQExt_kcajMoJ47wsRN4/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Opgavebeskrivelse
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' />
            <List.Content>
              <a
                href='https://github.com/dublo144/3sem-f3w2/tree/master/day2'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </List.Content>
          </List.Item>
        </List>

        <Header as='h5'>
          Thursday: Momondo like Servers and a bit about this app
        </Header>
        <List>
          <List.Item>
            <List.Icon name='book' />
            <List.Content>
              <a
                href='https://docs.google.com/document/d/1RnIgnyc_1eCS1PzqXtWstm2EPLV5coruQvR2FU07G-g/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Opgavebeskrivelse
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' />
            <List.Content>
              <a
                href='https://github.com/dublo144/3sem-f3w2/tree/master/day3'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </List.Content>
          </List.Item>
        </List>
        <p>
          This page is my take on a collective assignment for the entire week
          including routing, fetching from api's, authentication etc. The app is
          build with a main focus on context api, custom hooks, and custom
          routing.
        </p>

        <p>
          <b>Users</b> has access to the Jokes. <b>Username:</b> user,{' '}
          <b>Password:</b> userqwerty
        </p>
        <p>
          <b>Admins</b> has access to the Webscraper which is hidden when not
          logged in as Admin. <b>Username:</b> admin, <b>Password:</b>{' '}
          adminqwerty
        </p>
        <p>
          <b>NB</b> Signup functionality is not implemented on the frontend,
          however the backend should be able to handle it..
        </p>

        <p>A few things i want to point out:</p>

        <Header>
          The context api (
          <a
            href='https://github.com/dublo144/f3w2-friday-frontend/blob/master/src/hooks/useAuth.jsx'
            target='_blank'
            rel='noopener noreferrer'
          >
            useAuth.jsx
          </a>
          )
        </Header>
        <p>
          The entire app is wrapped in Authentication Context with a useAuth
          hook in order to tap in to the context. This ensures that
          authentication state is centralized, and isnt being passed around with
          prop-drilling and lifting state. Throughout my app, every component
          has access to the current authentication state aswell as functions to
          change it and they all subscribe to changes in auth, so triggering a
          change in auth, will trigger a rerender of any mounted component..
        </p>

        <Header>
          Protected Route (
          <a
            href='https://github.com/dublo144/f3w2-friday-frontend/blob/master/src/components/routes/ProtectedRoute.jsx'
            target='_blank'
            rel='noopener noreferrer'
          >
            ProtectedRoute.jsx
          </a>
          )
        </Header>
        <p>
          A custom component which takes in the components children (not props),
          and ensures that the user is logged in in order to access the pages.
          This component also utilizes the auth context described above
        </p>

        <Header>
          useFetch (
          <a
            href='https://github.com/dublo144/f3w2-friday-frontend/blob/master/src/hooks/useFetch.jsx'
            target='_blank'
            rel='noopener noreferrer'
          >
            useFetch.jsx
          </a>
          )
        </Header>
        <p>
          A classic custom hook used to async fetch from the backend, and return
          a loading state, response or error.. This hook could have been
          implemented more throughout the app though...Might come back later
          on..
        </p>

        <Header>Source Code</Header>
        <List>
          <List.Item>
            <List.Icon name='server' />
            <List.Content>
              <a
                href='https://github.com/dublo144/f3w2-friday-backend'
                target='_blank'
                rel='noopener noreferrer'
              >
                Backend
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='computer' />
            <List.Content>
              <a
                href='https://github.com/dublo144/f3w2-friday-frontend'
                target='_blank'
                rel='noopener noreferrer'
              >
                Frontend
              </a>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </>
  );
};

export default Home;

import React from 'react';
import { Message, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { apiUtils } from '../../utils/apiUtils';
import { useAuth } from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';

const Jokes = () => {
  const {
    user: { jwtToken }
  } = useAuth();
  const opts = apiUtils.makeOptions('GET', null, jwtToken);
  const { response, isLoading } = useFetch('/jokes', opts);

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }

  return (
    <>
      {response && (
        <Segment raised textAlign='center' style={{ height: '50vh' }}>
          <Message>
            <Message.Content>
              <Message.Header>{response.joke1}</Message.Header>
              {response.joke1Reference}
            </Message.Content>
          </Message>
          <Message>
            <Message.Content>
              <Message.Header>{response.joke2}</Message.Header>
              {response.joke2Reference}
            </Message.Content>
          </Message>
        </Segment>
      )}
    </>
  );
};

export default Jokes;

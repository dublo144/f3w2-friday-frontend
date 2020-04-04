import React from 'react';
import { Item, Dimmer, Loader, Segment } from 'semantic-ui-react';
import useFetch from '../../hooks/useFetch';
import { apiUtils } from '../../utils/apiUtils';
import { useAuth } from '../../hooks/useAuth';

const Webscraper = () => {
  const { token } = useAuth();
  const opts = apiUtils.makeOptions('GET', null, token);
  const { response, isLoading } = useFetch('/scrape', opts);

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }

  return (
    <Segment raised style={{ height: '100vh' }}>
      <Item.Group>
        {response &&
          response.map((data) => (
            <Item key={data.url}>
              <Item.Content>
                <Item.Header>{data.url}</Item.Header>
                <Item.Description>
                  <p>Number of divs: {data.divCount}</p>
                  <p>Number of bodies: {data.bodyCount}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
    </Segment>
  );
};

export default Webscraper;

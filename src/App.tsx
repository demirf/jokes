import React, { useState } from 'react';
import { Wrapper, Row, Header, Search, Form, Button } from './components/styled';
import axios from 'axios';
import { Joke } from './types';
import JokeItem from './components/JokeItem';

const BASE_URL = 'https://v2.jokeapi.dev/joke/Any?amount=10';

function App() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);


  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = `${BASE_URL}?contains=${search}&amount=10`;

    axios.get(endpoint)
      .then(({ data }) => {
        if (data.error) {
          setError(true); return;
        }

        setJokes(data.jokes);
      });
  }

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
        </Row>
        <Form onSubmit={getJokes}>
          <Search type="text" placeholder="Search.." value={search} onChange={handleOnChange} />
          <Button type="submit">Submit</Button>
        </Form>
        <div>
          { error && <p>Sorry, no jokes found.</p> }
          { jokes.length && jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />) }
        </div>
      </Wrapper>
    </div>
  )
}

export default App

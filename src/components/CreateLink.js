import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $name: String!
    $league: Int!
    $cup: Int!
    $concacaf: Int!
    $age: Int!
    $stadium: String!
    $state: String!
    $country: String!
    $nameleague: String!
    $image: String!
  ) {
    createLink(name: $name, league: $league, cup: $cup, concacaf: $concacaf, age: $age, stadium: $stadium,
        state: $state, country: $country, nameleague: $nameleague, image: $image) {
        id
        name
        league
        cup
        concacaf
        age
        stadium
        state
        country
        nameleague
        image
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    league: '',
    cup: '',
    concacaf: '',
    age: '',
    stadium: '',
    state: '',
    country: '',
    nameleague: '',
    image: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      name: formState.name,
      league: formState.league,
      cup: formState.cup,
      concacaf: formState.concacaf,
      age: formState.age,
      stadium: formState.stadium,
      state: formState.state,
      country: formState.country,
      nameleague: formState.nameleague,
      image: formState.image
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        createLink();
        }}
      >
        <div className="flex flex-column mt3">
  <input
    className="mb2"
    value={formState.name}
    onChange={(e) =>
      setFormState({
        ...formState,
        name: e.target.value
      })
    }
    type="text"
    placeholder="Name"
  />
  <input
    className="mb2"
    value={formState.league}
    onChange={(e) =>
      setFormState({
        ...formState,
        league: e.target.value
      })
    }
    type="text"
    placeholder="League"
  />
  <input
    className="mb2"
    value={formState.cup}
    onChange={(e) =>
      setFormState({
        ...formState,
        cup: e.target.value
      })
    }
    type="text"
    placeholder="Cup"
  />
  <input
    className="mb2"
    value={formState.concacaf}
    onChange={(e) =>
      setFormState({
        ...formState,
        concacaf: e.target.value
      })
    }
    type="text"
    placeholder="CONCACAF"
  />
  <input
    className="mb2"
    value={formState.age}
    onChange={(e) =>
      setFormState({
        ...formState,
        age: e.target.value
      })
    }
    type="text"
    placeholder="Age"
  />
  <input
    className="mb2"
    value={formState.stadium}
    onChange={(e) =>
      setFormState({
        ...formState,
        stadium: e.target.value
      })
    }
    type="text"
    placeholder="Stadium"
  />
  <input
    className="mb2"
    value={formState.state}
    onChange={(e) =>
      setFormState({
        ...formState,
        state: e.target.value
      })
    }
    type="text"
    placeholder="State"
  />
  <input
    className="mb2"
    value={formState.country}
    onChange={(e) =>
      setFormState({
        ...formState,
        country: e.target.value
      })
    }
    type="text"
    placeholder="Country"
  />
  <input
    className="mb2"
    value={formState.nameleague}
    onChange={(e) =>
      setFormState({
        ...formState,
        nameleague: e.target.value
      })
    }
    type="text"
    placeholder="Name League"
  />
  <input
    className="mb2"
    value={formState.image}
    onChange={(e) =>
      setFormState({
        ...formState,
        image: e.target.value
      })
    }
    type="text"
    placeholder="Image URL"
  />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
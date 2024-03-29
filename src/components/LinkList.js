import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
  links {
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
`
;
const LinkList = () => {
/*  const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ];
*/
const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      	{data && (
        <>
          {data.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
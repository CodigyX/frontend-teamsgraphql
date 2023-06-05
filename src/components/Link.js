import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        Name: {link.name}
      </div>
      <div>
        League: {link.league}
      </div>
      <div>
        Cup: {link.cup}
      </div>
      <div>
        CONCACAF: {link.concacaf}
      </div>
      <div>
        Age: {link.age}
      </div>
      <div>
        Stadium: {link.stadium}
      </div>
      <div>
        State: {link.state}
      </div>
      <div>
        Country: {link.country}
      </div>
      <div>
        Name League: {link.nameleague}
      </div>
      <div>
        Image: ({link.image})
      </div>
      <div>
        --------------------------------------------------------------------------------------
      </div>
    </div>
  );
};

export default Link;
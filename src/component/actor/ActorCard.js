import React from 'react';
import { SearchCard } from '../styled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <SearchCard className="img-wrapper">
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default ActorCard;

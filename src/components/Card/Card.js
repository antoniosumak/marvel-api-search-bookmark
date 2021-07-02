import React, { useContext, useState } from 'react';
import { BookmarkContext } from '../../context/BookmarkContext';
import {
  CardWrapper,
  ImageWrapper,
  Image,
  HeroName,
  BookmarkIcon,
  BookmarkRow,
} from './CardStyles';

const Card = ({ name, src, id, hidden }) => {
  const { items, setItems } = useContext(BookmarkContext);
  const [bookmarked, setBookmarked] = useState(false);

  localStorage['data'] = JSON.stringify(items);
  const addIdToArray = () => {
    localStorage['data'] = JSON.stringify(items);
    setItems([...items, id]);
  };

  src = src + '/standard_xlarge.jpg';
  return (
    <CardWrapper>
      <BookmarkRow>
        <BookmarkIcon
          hidden={hidden}
          isbookmarked={bookmarked.toString()}
          onClick={() => {
            addIdToArray();
            setBookmarked(!bookmarked);
          }}
        />
      </BookmarkRow>
      <ImageWrapper>
        <Image src={src} />
      </ImageWrapper>
      <HeroName>{name}</HeroName>
    </CardWrapper>
  );
};

export default Card;

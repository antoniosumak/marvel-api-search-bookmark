import React, { useState, useEffect, useContext } from 'react';
import md5 from 'md5';

//Components
import Section from './components/Section/Section';
import Card from './components/Card/Card';
import Searchbar from './components/Searchbar/Searchbar';

//Styles
import {
  Grid,
  TrashRow,
  TrashCan,
  Button,
  Center,
} from './lib/styles/generalStyles';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

//API
import { getCharactersByName } from './api/getCharactersByName';
import { getCharactersById } from './api/getCharactersById';

//Context
import { BookmarkContext } from './context/BookmarkContext';

function App() {
  const [dataFromSearch, setDataFromSearch] = useState(null);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [numberOfCards, setNumberOfCards] = useState(20);

  const { items, setItems } = useContext(BookmarkContext);

  //These keys are here if api exceeds limited number of calls
  //Uncomment public and private, then comment ones that exceeded limit

  //let publicKey = '7c896812316b90146f957cba2a044d59';
  //let privateKey = '0baedf2c01ad7f96940078f427e7531f06c0e975';
  let publicKey = '3085a94c12ad3b32d7b372fd283f2b24';
  let privateKey = '6340c657a792b2169f1e1815cd90c518d823bb28';
  //let publicKey = '2107510df394a3eb406a72c7fdd63a81';
  //let privateKey = '43fbb73da505c89395ede8237cb77e5a3f66b7b7';

  useEffect(() => {
    if (localStorage.getItem('data')) {
      const localData = JSON.parse(localStorage['data']);
      setItems(localData);
    }
  }, []);

  console.log(items);

  let ts = 1;
  let hashValue = md5(ts + privateKey + publicKey);

  useEffect(() => {
    getCharactersByName(ts, publicKey, hashValue, searchValue).then((data) =>
      setDataFromSearch(data)
    );
  }, [ts, publicKey, hashValue, searchValue]);

  //Get heroes when bookmark star is clicked
  //temporary data
  const GetHeroesById = async () => {
    const itemsData = await Promise.all(
      items.map(async (data) => {
        const response = await getCharactersById(
          ts,
          publicKey,
          hashValue,
          data
        );
        return await response;
      })
    );
    setBookmarkData(itemsData);
  };

  //Get heroes whose id is in locale storage
  const GetHeroesByIdLocal = async () => {
    if (localStorage.getItem('data') !== null) {
      const localStorageData = JSON.parse(localStorage['data']);
      const heroesFromLocalStorage = await Promise.all(
        localStorageData.map(async (data) => {
          const response = await getCharactersById(
            ts,
            publicKey,
            hashValue,
            data
          );
          return await response;
        })
      );
      setBookmarkData(heroesFromLocalStorage);
    }
  };

  useEffect(() => {
    GetHeroesByIdLocal();
  }, []);

  useEffect(() => {
    GetHeroesById();
  }, [items]);

  const handleSearch = (input) => {
    const filteredValue = input.toLowerCase();
    setSearchValue(filteredValue);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const increasePagination = () => {
    setNumberOfCards(numberOfCards + 8);
  };

  return (
    <Section>
      <TrashRow>
        <Tooltip title="Delete local storage data">
          <TrashCan onClick={clearLocalStorage} />
        </Tooltip>
      </TrashRow>
      <Searchbar
        onValueChange={handleSearch}
        placeholder={'Search marvel heroes...'}
      />
      <Grid>
        {searchValue !== ''
          ? dataFromSearch.data &&
            dataFromSearch.data.results.map(
              (values, index) =>
                index < numberOfCards && (
                  <Card
                    key={values.id}
                    name={values.name}
                    src={values.thumbnail.path}
                    id={values.id}
                  />
                )
            )
          : bookmarkData &&
            bookmarkData.map(
              (values) =>
                values.data &&
                values.data.results.map((values) => (
                  <Card
                    name={values.name}
                    src={values.thumbnail.path}
                    key={values.id}
                    hidden={true}
                  />
                ))
            )}
      </Grid>

      {dataFromSearch &&
        dataFromSearch.data &&
        dataFromSearch.data.results.length > 20 && (
          <Center>
            {' '}
            <Button onClick={() => increasePagination()}>Show more</Button>
          </Center>
        )}
    </Section>
  );
}

export default App;

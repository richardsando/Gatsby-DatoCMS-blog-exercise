import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState([
    { species: true },
    { items: true },
    { specimen: true },
    { article: true },
  ]);
  const [results, setResults] = useState<any>(null);
  const [typeUi, setTypeUi] = useState<boolean>(false);
  console.log(results);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await axios.get('http://localhost:3001/search', {
      params: { query: query, recordtype: type },
    });

    const array = result.data;

    const uniqueResults = [
      ...new Map(
        array.map((item: any) => [item['displayTitle'], item])
      ).values(),
    ];
    console.log(uniqueResults);
    setResults(uniqueResults);
  };

  const handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    console.log(target.checked);
    type.forEach(() => {});

    // e.target.checked = !e.target.checked
  };

  const filterUniqueResults = (
    value: object,
    index: number,
    self: [object]
  ) => {
    return self.indexOf(value) === index;
  };

  const changeTypeUi = () => {
    typeUi ? setTypeUi(!typeUi) 
    // if (typeUi === false) {
    //   setTypeUi(true);
    // } else {
    //   if (typeUi === true) {
    //     setTypeUi(false);
    //   }
    // }
  };

  return (
    <div>
      <form
        action="post"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="search params">Search:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search database.."
          name="search params"
          value={query}
          id="search params"
        />
        <br />
        <div style={{ display: 'flex', width: '300px', alignItems: 'center' }}>
          <label htmlFor="type-checkbox">
            <h4>Filter By Type</h4>
          </label>
          <input
            type="checkbox"
            id="type-checkbox"
            name="type"
            onClick={() => changeTypeUi()}
          />
        </div>
        {typeUi && (
          <div>
            <hr />
            <input
              type="checkbox"
              id="article-checkbox"
              name="article"
              value="article"
              onClick={(e) => handleChange(e)}
              defaultChecked
            />
            <label htmlFor="article-checkbox">Article</label>
            <br />
            <input
              type="checkbox"
              id="item-checkbox"
              name="item"
              value="item"
              onClick={(e) => handleChange(e)}
              defaultChecked={true}
            />
            <label htmlFor="item-checkbox">Item</label>
            <br />
            <input
              type="checkbox"
              id="species-checkbox"
              name="species"
              value="species"
              onClick={(e) => handleChange(e)}
              defaultChecked={true}
            />
            <label htmlFor="species-checkbox">Species</label>
            <br />
            <input
              type="checkbox"
              id="specimen-checkbox"
              name="specimens"
              value="specimens"
              onClick={(e) => handleChange(e)}
              defaultChecked={true}
            />
            <label htmlFor="specimen-checkbox">Specimen</label>
            <hr />
          </div>
        )}
        <input type="submit" value="Submit" />
      </form>

      {results ? (
        <ul>
          {results.filter(filterUniqueResults).map((object: any) => {
            return (
              <li key={object.displayTitle}>
                <h3>{object.displayTitle}</h3>
                <p>{object.recordType}</p>
                {object.authors
                  ? object.authors.map((author: { fullName: string }) => {
                      return <p key={author.fullName}>{author.fullName}</p>;
                    })
                  : null}
                {object.media.length > 0 && (
                  <img
                    src={object.media[0].small.uri}
                    alt={object.media[0].caption}
                    style={{ width: '200px' }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;

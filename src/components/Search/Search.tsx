import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(["species","item","specimen","article"]);
  const [results, setResults] = useState<any>(null);
  console.log(results);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await axios.get("http://localhost:3001/search", {
      params: { query: query, recordtype: type },
    });

    const array = result.data;

    const uniqueResults = [
      ...new Map(
        array.map((item: any) => [item["displayTitle"], item])
      ).values(),
    ];
    console.log(uniqueResults);
    setResults(uniqueResults);
  };

  const filterUniqueResults = (
    value: object,
    index: number,
    self: [object]
  ) => {
    return self.indexOf(value) === index;
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
        <br />
        <label htmlFor="">Type</label>
        <br />
        <label htmlFor="article-checkbox">Article</label>
        <input
          type="checkbox"
          id="article-checkbox"
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="item-checkbox">Item</label>
        <input type="checkbox" id="item-checkbox" />
        <label htmlFor="species-checkbox">Species</label>
        <input type="checkbox" id="species-checkbox" />
        <label htmlFor="specimen-checkbox">Specimen</label>
        <input type="checkbox" id="specimen-checkbox" />
        {/* <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
          <option value="any">Any</option>
          <option value="article">Article</option>
          <option value="species">Species</option>
          <option value="item">Item</option>
        </select> */}
        <br />
        <br />
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
                    style={{ width: "200px" }}
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

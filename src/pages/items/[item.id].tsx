import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import '../index.scss';

const Item = ({ location }: any) => {
  const [data, setData] = useState<any>(false);


  const createMarkup = (props: string) => {
    return { __html: props };
  };

  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get('http://localhost:3001/item', {
        headers: {
          id: location.state.id,
        },
      });

      setData(response.data);
    };

    queryServer();
  }, []);

  return (
    <div>
      <Link to="/items">Back to Items</Link>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.contentSummary}</p>
          {<p dangerouslySetInnerHTML={createMarkup(data.content)} />}
          <div>
           <h2>{data.objectName}</h2>
           <p>{data.objectSummary}</p>
            <div>
              {data.media ? (
                <ul>
                  {data.media.map((media: any) => {
                    return (
                      <li key={media.id}>
                        {media.type === 'image' ? (
                          <div>
                            <img
                              src={media.small.uri}
                              alt={media.caption}
                            ></img>
                            <p>{media.caption}</p>
                          </div>
                        ) : (
                          <a href={media.file.uri} target="_blank">
                            {JSON.stringify(media.caption)}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>No images to available</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading content..</p>   
      )}
      <Link to="/">Back to Items</Link>
    </div>
  );
};

export default Item;

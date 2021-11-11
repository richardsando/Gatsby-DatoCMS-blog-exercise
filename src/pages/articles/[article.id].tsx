import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import '../index.scss';
import { createMarkup } from '../../helper/createMarkup';

const Article = ({ location }: any) => {
  const [data, setData] = useState<any>(false);
  console.log(data);

  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get('http://localhost:3001/article', {
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
      <Nav />
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.contentSummary}</p>
          {<p dangerouslySetInnerHTML={createMarkup(data.content)} />}
          <div>
            <h2>Related Articles</h2>
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
      <Link to="/articles">Back to articles</Link>
    </div>
  );
};

export default Article;

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
      const response = await axios.get('http://localhost:3001/specie', {
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
          <div>
            <h3 dangerouslySetInnerHTML={createMarkup(data.displayTitle)} />
            <p>{data.biology}</p>
            <p>{data.briefId}</p>
            <p>{data.generalDescription}</p>
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
                              width="600px"
                            ></img>
                            {
                              <p
                                dangerouslySetInnerHTML={createMarkup(
                                  media.caption
                                )}
                              />
                            }
                          </div>
                        ) : (
                          <div>
                            {/* <iframe
                            width="667px"
                            height="500"
                              src={media.small.uri}
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>
                            <a href={media.uri} target="_blank">
                              {
                                <p
                                  dangerouslySetInnerHTML={createMarkup(
                                    media.caption
                                  )}
                                />
                                  }
                            </a> */}
                          </div>
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
      <Link to="/species">Back to speices</Link>
    </div>
  );
};

export default Article;

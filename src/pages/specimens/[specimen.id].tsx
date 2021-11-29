import axios from "axios";
import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { createMarkup } from "../../helper/createMarkup";

const Specimen = ({ location }: any) => {
  const [data, setData] = useState<any>(false);
  console.log(data);
  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get("http://localhost:3001/specimen", {
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
      <Link to="/specimens">Back to Specimens</Link>
      {data ? (
        <div>
          {<h1 dangerouslySetInnerHTML={createMarkup(data.displayTitle)} />}
          <div>
            <h2>{data.objectName}</h2>
            <p>{data.objectSummary}</p>
            <div>
              {data.media ? (
                <ul>
                  {data.media.map((media: any) => {
                    return (
                      <li key={media.id}>
                        {media.type === "image" ? (
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
    </div>
  );
};

export default Specimen;

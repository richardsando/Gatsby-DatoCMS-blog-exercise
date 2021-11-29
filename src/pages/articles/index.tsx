import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get('http://localhost:3001/articles');

      setData(response.data);
    };

    queryServer();
  }, []);

  return (
    <div>
      <h1>Museums Victoria Articles</h1>

      {data ? (
        <ul>
          {data.map((item: any) => {
            const link = item.id.split('/');
            return (
              <li key={item.title}>
                <Link to={link[1]} state={{ id: item.id }}>
                  <h3>{item.title}</h3>
                  <p>{item.contentSummary}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default Articles;

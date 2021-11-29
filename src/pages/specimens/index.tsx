import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { createMarkup } from '../../helper/createMarkup';

const Specimens = () => {
  const [data, setData] = useState<any>(null);
  console.log(data);

  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get('http://localhost:3001/specimens');
      setData(response.data);
    };
    queryServer();
  }, []);

  return (
    <div>
      <h1>Museums Victoria Specimens</h1>

      {data ? (
        <ul>
          {data.map((item: any) => {
            const link = item.id.split('/');
            return (
              <li key={item.id}>
                <Link to={link[1]} state={{ id: item.id }}>
                  {
                    <p
                      dangerouslySetInnerHTML={createMarkup(item.displayTitle)}
                    />
                  }
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

export default Specimens;

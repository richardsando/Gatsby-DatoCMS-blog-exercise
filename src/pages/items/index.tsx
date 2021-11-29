import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';


const Items = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get('http://localhost:3001/items');
      setData(response.data);
    };

    queryServer();
  }, []);

  return (
    <div>
      <h1>Museums Victoria Items</h1>

      {data ? (
        <ul>
          {data.map((item: any) => {
            const link = item.id.split('/');
            return (
              <li key={item.id}>
                <Link to={link[1]} state={{ id: item.id }}>
                  {item.objectName}
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

export default Items;

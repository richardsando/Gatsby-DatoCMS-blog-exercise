import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/Nav';


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
		 <Nav />
    <h1>Museums Vicotria Database</h1>

      
    </div>
  );
};

export default Articles;

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { application } = require('express');
const axios = require('axios');
require('dotenv').config();

const apikey = process.env.MUSEUMS_VIC_API_KEY;

const app = express();

app.use(helmet());

app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/articles', async (req, res) => {
  try {
    const response = await axios.get(
      `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/articles`,
      {
        headers: {
          apikey: apikey,
        },
      }
    );
    const data = response.data;
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get('/article', async (req, res) => {
  const { id } = req.headers;
  try {
    const response = await axios.get(
      `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/${id}`,
      {
        headers: {
          apikey: apikey,
        },
      }
    );
    const data = response.data;
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get('/item', async (req, res) => {
    const { id } = req.headers;
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/${id}`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get('/items', async (req, res) => {
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/items`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get('/specie', async (req, res) => {
    const { id } = req.headers;
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/${id}`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get('/species', async (req, res) => {
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/species`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get('/specimen', async (req, res) => {
    const { id } = req.headers;
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/${id}`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get('/specimens', async (req, res) => {
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/specimens`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get('/search', async (req, res) => {
    try {
      const response = await axios.get(
        `https://wovg-community.gateway.prod.api.vic.gov.au/museumvictoria/v1.0/collections/search`,
        {
          headers: {
            apikey: apikey,
          },
        }
      );
      const data = response.data;
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
  
  


  
  

  
  



// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});

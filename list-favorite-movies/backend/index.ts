require('dotenv').config();
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get('https://www.omdbapi.com/', {
      params: {
        apiKey: process.env.OMDB_API_KEY,
        s: query
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from OMDB API' });
  }
})

app.listen(3000, () => console.log('listening on port http://localhost:3000'));
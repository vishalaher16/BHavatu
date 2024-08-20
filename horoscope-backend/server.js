const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/horoscope', async (req, res) => {
  try {
    const { data } = await axios.get('https://www.drikpanchang.com/');
    const $ = cheerio.load(data);

    // Adjust the selector based on the actual content
    const horoscope = $('.daily-horoscope-class-selector').text(); // Replace with the correct selector

    res.json({ horoscope });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');

const PORT = 3001;
require("dotenv").config();
const {API_URL} = process.env


conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    const allCountries = Country.findAll();  
    if(!allCountries.length){
      const response = await axios(`http://localhost:5000/countries`);
      let countryDB = response.data.map((country) =>{
        return{
          id: country.cca3,
          name: country.name.common,
          flagImage: country.flags.png,
          continent: country.region,
          capital: country.capital ? country.capital[0] : "No encontre nada!!!!!!!",
          population: country.population,
        }
      })
        await Country.bulkCreate(countryDB)
        
    }
    console.log(`Server running on.... ${PORT} `);
  })
  }).catch(error => console.error(error))

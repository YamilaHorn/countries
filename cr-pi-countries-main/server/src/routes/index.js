const { Router } = require("express");
const { Country, Activity} = require("../db");
const { Op } = require("sequelize");
const router = Router();
require("dotenv").config();

router.get("/countries", async (req, res) => {
    try {
      const allCountries = await Country.findAll({
        include: Activity,
      });
      res.status(200).json(allCountries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/countries/name", async (req, res) => {
    let { pais } = req.query;
    try {
      const minusMayus = {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${pais}%`,
            },
          },
          {
            name: {
              [Op.iLike]: `%${pais}%`,
            },
          },
        ],
      };
  
      const countryName = await Country.findAll({
        where: minusMayus,
        include: Activity
      });
      res.send(countryName);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/countries/:idPais", async (req, res) => {
    const { idPais } = req.params;
    try {
      const countryID = await Country.findOne({
        where: {
          id: idPais,
        },
        include: Activity,
      });
      res.send(countryID);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/activities", async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
      if (!name || !difficulty || !duration || !season || !countries) res.status(400).send("Faltan datos!");
  
      let activity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      await activity.setCountries(countries);
  
  
      const cratedActivity = await Activity.findOne({
        where: {id : activity.id},
        include: {
          model: Country,
          through:{
            attributes: []
          }
        }
      })
      res.status(200).json({ msg: "Actividad creada con exito!", cratedActivity });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;

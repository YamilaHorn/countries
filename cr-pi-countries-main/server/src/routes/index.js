const { Router } = require("express");
const country = require('./country')
const activity = require ('./activities')


const routerCountries = Router();

routerCountries.use('/countries',country)
routerCountries.use('/activities',activity)

module.exports = routerCountries

// const { Router } = require("express");
// const { Country, Activity} = require("../db");
// const { Op } = require("sequelize");
// const countriesRouter = require("./countriesRouter");
// const mainRouter = Router();
// require("dotenv").config();

// mainRouter.use("/countries", countriesRouter);

//   mainRouter.post("/activities", async (req, res) => {
//     const { name, difficulty, duration, season, countries } = req.body;
//     try {
//       if (!name || !difficulty || !duration || !season || !countries) res.status(400).send("Faltan datos!");
  
//       let activity = await Activity.create({
//         name,
//         difficulty,
//         duration,
//         season,
//       });
//       await activity.setCountries(countries);
  
  
//       const cratedActivity = await Activity.findOne({
//         where: {id : activity.id},
//         include: {
//           model: Country,
//           through:{
//             attributes: []
//           }
//         }
//       })
//       res.status(200).json({ msg: "Actividad creada con exito!", cratedActivity });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// module.exports = mainRouter;

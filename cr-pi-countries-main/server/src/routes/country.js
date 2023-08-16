const getById = require('../controllers/getById')
const getCountries = require('../controllers/getCountries')
const getByName = require('../controllers/getByName')
const {Router} = require('express')

const router = Router()

router.get('/',getCountries)

router.get('/name',getByName)

router.get('/:idPais',getById)





module.exports = router;

// const { Router } = require("express");

// const countriesRouter = Router();

// countriesRouter.get("/countries", async (req, res) => {
//     try {
//       const allCountries = await Country.findAll({
//         include: Activity,
//       });
//       res.status(200).json(allCountries);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

//   countriesRouter.get("/countries/name", async (req, res) => {
//     let { pais } = req.query;
//     try {
//       const minusMayus = {
//         [Op.or]: [
//           {
//             name: {
//               [Op.like]: `%${pais}%`,
//             },
//           },
//           {
//             name: {
//               [Op.iLike]: `%${pais}%`,
//             },
//           },
//         ],
//       };
  
//       const countryName = await Country.findAll({
//         where: minusMayus,
//         include: Activity
//       });
//       res.send(countryName);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

//   countriesRouter.get("/countries/:idPais", async (req, res) => {
//     const { idPais } = req.params;
//     try {
//       const countryID = await Country.findOne({
//         where: {
//           id: idPais,
//         },
//         include: Activity,
//       });
//       res.send(countryID);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// module.exports = countriesRouter;
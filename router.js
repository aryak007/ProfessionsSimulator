const express = require('express');
const router = express.Router();

const profController = require('./controllers/Professions-controller.js')


//Primary routes
router.route('/getProfessionsWithRepetitions')
    .get(profController.getProfessionsWithRepetitions)


router.route('/getProfessionsWithoutRepetitions')
    .get(profController.getProfessionsWithoutRepetitions)

//Other fun routes
router.route('/getRandomProfessions/:professions')
    .get(profController.fetchRandomProfessions)

router.route('/getTotalProfs')
    .get(profController.totalProfsInProfessionsCorpus)

router.route('/getRandomNumbers/:num')
    .get(profController.fetchListOfRandomIntsWithinRange)

module.exports = router;

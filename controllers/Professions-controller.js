'use strict';
var Commons = require('../util/Commons.js')


/*Eg API - /api/getProfessionsWithoutRepetitions/professions=30&players=10 */
function getProfessionsWithoutRepetitions(req, res) {
    var numOfProfs = req.query.professions;
    var numOfPlayers = req.query.players;
    if (numOfProfs < (numOfPlayers * 3)) {
        res.status(400).send("Repeations are allowed since number of professions = " + numOfProfs + " is less than number of players (" + numOfPlayers + " x 3). \nYou may want to try the endpoint /api/getProfessionsWithRepetitions \n\nSee \"https://github.com/aryak93/ProfessionsSimulator#list-of-available-apis\" for details about the APIs");
        console.log("Repeations are allowed since number of professions = " + numOfProfs + " is less than number of players (" + numOfPlayers + " x 3)");
    }
    else {
        var randomlyChosenProfs = []
        var resultData = []
        var resultForEachPlayer = []

        var professionsData = Commons.ProfessionsStore.getInstance();
        var profsDataLength = professionsData.length
        var obj = {}
        var i = 0
        randomlyChosenProfs = Commons.returnRandomProfessions(numOfProfs, professionsData)
        resultData = Commons.returnListOfProfessionsForEachPlayerWithoutRepetitions(randomlyChosenProfs, numOfPlayers)
        res.json(resultData)
    }

}

/* Eg API - /api/getProfessionsWithoutRepetitions/professions=15&players=10 */
function getProfessionsWithRepetitions(req, res) {
    var numOfProfs = req.query.professions;
    var numOfPlayers = req.query.players;
    var randomlyChosenProfs = []
    var resultData = []
    var resultForEachPlayer = []

    console.log("Repeations are allowed since number of professions " + numOfProfs + " is less than number of players " + numOfPlayers + " x 3");
    var professionsData = Commons.ProfessionsStore.getInstance();
    var profsDataLength = professionsData.length
    var obj = {}
    var i = 0
    randomlyChosenProfs = Commons.returnRandomProfessions(numOfProfs, professionsData)
    resultData = Commons.returnListOfProfessionsForEachPlayerWithRepetitions(randomlyChosenProfs, numOfPlayers)
    res.json(resultData)

}

/*Eg API - /api/getRandomProfessions/20 */
function fetchRandomProfessions(req, res) {
    var professionsData = Commons.ProfessionsStore.getInstance();
    var numOfProfs = req.params.professions
    if(numOfProfs>professionsData.length)
        res.send("Number of professions must be less than "+professionsData.length)
    var randomlyChosenProfs = Commons.returnRandomProfessions(numOfProfs, professionsData)
    res.send(randomlyChosenProfs)
}

/*Eg API - /api/getTotalProfs */
function totalProfsInProfessionsCorpus(req, res) {
    var professionsData = Commons.ProfessionsStore.getInstance();
    res.send(professionsData.length+"")
}

/*Eg /api/getRandomNumbers/:num/min=5&max=10  */
function fetchListOfRandomIntsWithinRange(req, res) {
    var num = req.params.num;
    var min = (Number)(req.query.min);
    var max = (Number)(req.query.max);

    console.log(min + " " + max)
    if (max < min)
        res.send("MAX value cannot be less than MIN value")
    var randNumbers = []
    while (randNumbers.length < num) {
        randNumbers.push(Commons.getRandomIntegerInRange(min, max));
    }
    res.send(randNumbers)
}


module.exports = {
    getProfessionsWithoutRepetitions: getProfessionsWithoutRepetitions,
    getProfessionsWithRepetitions: getProfessionsWithRepetitions,
    fetchRandomProfessions: fetchRandomProfessions,
    totalProfsInProfessionsCorpus: totalProfsInProfessionsCorpus,
    fetchListOfRandomIntsWithinRange: fetchListOfRandomIntsWithinRange
}





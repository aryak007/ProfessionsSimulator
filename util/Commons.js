'use strict';
var fs = require('fs')

//Singleton implementation for fetching the list of professions data.
var  ProfessionsStore = (function(){
    function ProfessionsStore() {
        var profData;
        var profData = JSON.parse(fs.readFileSync('data/professions-corpus.json'))
        return profData.occupations;
    };
    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                console.log("First hit!!!!")
                instance = new ProfessionsStore();
                instance.constructor = null; // The constructor is hidden so that the returned object can't be new'd again
            }
            return instance;
        }
   };
})();

function getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function returnRandomProfessions(numOfProfs,professionsData){
    var randomlyChosenProfs = []
    var profsDataLength = professionsData.length
    for (var i = 0; i < numOfProfs; i++) { 
            var x = getRandomIntegerInRange(0,profsDataLength-1)
            randomlyChosenProfs[i] = professionsData[x]
        }
    return randomlyChosenProfs
}

function returnListOfProfessionsForEachPlayerWithRepetitions(randomlyChosenProfs,numOfPlayers){
    var resultData = []
    var resultForEachPlayer = []
    var obj = {}
    var i =0
    for(i = 0; i < numOfPlayers; i++){
        resultForEachPlayer = []
        while(resultForEachPlayer.length<3){
            resultForEachPlayer.push(randomlyChosenProfs[getRandomIntegerInRange(0,randomlyChosenProfs.length-1)])
        }
        obj = {
            "player":i+1,
            "professions":resultForEachPlayer
        }
        
        resultData.push(obj)
    }
    return resultData 
}

function returnListOfProfessionsForEachPlayerWithoutRepetitions(randomlyChosenProfs,numOfPlayers){
    var resultData = []
    var resultForEachPlayer = []
    var obj = {}
    var randomPosition
    var map = {}
    var i = 0;
    for(i = 0; i < numOfPlayers; i++){
        resultForEachPlayer = []
        while(resultForEachPlayer.length<3){
            
            randomPosition = getRandomIntegerInRange(0,randomlyChosenProfs.length-1)
           
            if(randomPosition in map){
                continue;   
            }
            else{
                resultForEachPlayer.push(randomlyChosenProfs[randomPosition])
                map[randomPosition] = true     
            }
        }
        obj = {
            "player":i+1,
            "professions":resultForEachPlayer
        }
        //console.log(resultData.length+" is the length")
        resultData.push(obj)
    }
    return resultData 
}

module.exports = {
    ProfessionsStore:ProfessionsStore,
    getRandomIntegerInRange:getRandomIntegerInRange,
    returnRandomProfessions:returnRandomProfessions,
    returnListOfProfessionsForEachPlayerWithRepetitions:returnListOfProfessionsForEachPlayerWithRepetitions,
    returnListOfProfessionsForEachPlayerWithoutRepetitions:returnListOfProfessionsForEachPlayerWithoutRepetitions
}
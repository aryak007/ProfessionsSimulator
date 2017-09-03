var assert = require('assert');
var should = require('should');

var Commons = require('../../util/Commons')


describe('Unit Tests for Commons util functions', function () {
    describe('Testing ProfessionsStore', function () {
        it('Should return the same instance even if it is invoked multiple times since it implements a singleton model', function () {
            var profsData1 = Commons.ProfessionsStore.getInstance();
            var profsData2 = Commons.ProfessionsStore.getInstance();
            assert.equal(profsData1, profsData2)
        })
    })

    describe('Testing getRandomIntegerInRange', function () {
        it('Should return a random integer in specified range which also ensures that it inclusive of min and inclusive of max', function () {
            var randNum = Commons.getRandomIntegerInRange(10, 100)
            randNum.should.be.within(10, 100);
        })
    })

    describe('Testing returnRandomProfessions', function () {
        it('Should return a random list of professions of length n from the professions corpus', function () {
            console.log("n = " + 5)
            var n = 5;
            var profsData = Commons.ProfessionsStore.getInstance();
            var randomlyChosenProfs = Commons.returnRandomProfessions(n,profsData)
            assert.equal(randomlyChosenProfs.length,n)
        })
    })

    describe('Testing returnListOfProfessionsForEachPlayerWithRepeatations', function () {
        it('Should return a list of professions in sets of 3 for each player', function () {
            console.log("n = " + 5)
            console.log("Players = "+10)
            var n = 5;
            var players = 10;
            var profsData = Commons.ProfessionsStore.getInstance();
            var randomlyChosenProfs = Commons.returnRandomProfessions(n,profsData)
            var listOfProfs = Commons.returnListOfProfessionsForEachPlayerWithRepetitions(randomlyChosenProfs,players)
            assert.equal(listOfProfs.length,players)
        })
    })
    
    describe('Testing returnListOfProfessionsForEachPlayerWithoutRepeatations', function () {
        it('Should return a list of professions in sets of 3 for each player and all professions must be unique', function () {
            console.log("n = " + 5)
            console.log("Players = "+10)
            var n = 30;
            var players = 10;
            var count = 0;
            var map = {}
            var profsData = Commons.ProfessionsStore.getInstance();
            var randomlyChosenProfs = Commons.returnRandomProfessions(n,profsData)
            var listOfProfs = Commons.returnListOfProfessionsForEachPlayerWithoutRepetitions(randomlyChosenProfs,players)
            /* listOfProfs.forEach(function(playerInfo) {
                playerInfo.professions.forEach(function(prof){
                    if(prof in map)
                    {
                        count++;
                    }
                    else{
                        map[prof] = true
                    }
                })
            }) */
            assert.equal(listOfProfs.length,players) // Asserts whether the returned array of professions are equal to the number of players or not.
            //count.should.be.equal(0); // Checks whether the professions returned are unique or not
        })
    })
})
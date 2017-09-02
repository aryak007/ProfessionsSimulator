# ProfessionsSimulator 1.0.0

## Usage
### Docker (Easiest)
```docker
docker-compose up
```
### Or you can run the following commands to get the stack up and running

```javascript
npm install
gulp
```
### Both the above methods will start hosting the app at http://localhost:3000 . Check the list of available APIs to know about the routes

## List of available APIs

### Primary routes
1. GET /api/getProfessionsWithRepetitions - Returns a list of professions for each player and this API allows repetitions.

E.g. -  http://localhost:3000/api/getProfessionsWithRepetitions?professions=10&players=5
   ```json
   [
    {
        "player": 1,
        "professions": [
            "community association manager",
            "engineer",
            "reinforcing iron worker"
        ]
    },
    {
        "player": 2,
        "professions": [
            "light truck driver",
            "oral surgeon",
            "reinforcing iron worker"
        ]
    },
    {
        "player": 3,
        "professions": [
            "industrial production manager",
            "solderer",
            "light truck driver"
        ]
    },
    {
        "player": 4,
        "professions": [
            "air conditioning mechanic",
            "oral surgeon",
            "solderer"
        ]
    },
    {
        "player": 5,
        "professions": [
            "air conditioning mechanic",
            "industrial production manager",
            "oral surgeon"
        ]
    }
]
   ```
2. GET /api/getProfessionsWithoutRepetitions - Returns a list of professions for each player and no two professions are same.

E.g. - http://localhost:3000/api/getProfessionsWithoutRepetitions?professions=15&players=5
```json
[
    {
        "player": 1,
        "professions": [
            "chemist",
            "administrative services manager",
            "textile knitting machine setter"
        ]
    },
    {
        "player": 2,
        "professions": [
            "forest fire prevention specialist",
            "product promoter",
            "musical instrument repairer"
        ]
    },
    {
        "player": 3,
        "professions": [
            "museum technician",
            "medical assistant",
            "firefighter"
        ]
    },
    {
        "player": 4,
        "professions": [
            "floor sander",
            "dishwasher",
            "criminal investigator"
        ]
    },
    {
        "player": 5,
        "professions": [
            "railroad conductor",
            "title examiner",
            "forestry teacher"
        ]
    }
]
```

## Other fun routes
3. GET /api/getRandomProfessions/NumOfProfessions - Returns a list of random professions of size NumOfProfessions.
E.g. - http://localhost:3000/api/getRandomProfessions/5
```json
[
    "millwright",
    "interior designer",
    "kettle operator",
    "agent",
    "agricultural engineer"
]
```

4. GET /api/getTotalProfs - Returns the total number of professions available in the corpus to choose from.
E.g. - http://localhost:3000/api/getTotalProfs
```
961
```

5. GET /api/getRandomNumbers/n - Takes a range as query and returns a list of 'n' random numbers within the specified range.
E.g. - http://localhost:3000/api/getRandomNumbers/5?min=4&max=10
```json
[
    5,
    10,
    5,
    6,
    6
]
```

## Tests

The reporter used is "mocha-jenkins-reporter" in this case to make the test results compatible with Jenkins
### Unit tests
Run the following command to run the unit tests - 
```
npm run unit
```
The test results can be found at the path - tests/unit/unit.xml
### System tests
Run the following command to run the system tests - 
```
npm run system
```
The test results can be found at the path - tests/unit/system.xml


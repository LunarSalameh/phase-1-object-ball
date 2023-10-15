function gameObject() {
    let teamsObject = 
        {
            home: {
                teamName: "Brooklyn Nets",
                colors: ['Black', 'White'],
                players: {
                    "Alan Anderson": {
                        Number: 0,
                        Shoe: 16,
                        Points: 22,
                        Rebound: 12,
                        Assits: 12,
                        Steals: 3,
                        Blocks: 1,
                        SlamDunks: 1,
                    },
                    "Raggie Evans": {
                        Number: 30,
                        Shoe: 14,
                        Points: 12,
                        Rebound: 12,
                        Assits: 12,
                        Steals: 12,
                        Blocks: 12,
                        SlamDunks: 7,
                    },
                    "Brook Lopez": {
                        Number: 11,
                        Shoe: 17,
                        Points: 17,
                        Rebound: 19,
                        Assits: 10,
                        Steals: 3,
                        Blocks: 1,
                        SlamDunks: 15,
                    },
                    "Mason Plumlee": {
                        Number: 1,
                        Shoe: 19,
                        Points: 26,
                        Rebound: 12,
                        Assits: 6,
                        Steals: 3,
                        Blocks: 8,
                        SlamDunks: 5,
                    },
                    "Jason Terry": {
                        Number: 31,
                        Shoe: 15,
                        Points: 19,
                        Rebound: 2,
                        Assits: 2,
                        Steals: 4,
                        Blocks: 11,
                        SlamDunks: 1,
                    },
                },
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ['Turquoise', 'Purple'],
                players: {
                    "Jeff Adrien": {
                        Number: 4,
                        Shoe: 18,
                        Points: 10,
                        Rebound: 1,
                        Assits: 1,
                        Steals: 2,
                        Blocks: 7,
                        SlamDunks: 2,
                    },
                    "Bismak Biyombo": {
                        Number: 0,
                        Shoe: 16,
                        Points: 12,
                        Rebound: 4,
                        Assits: 7,
                        Steals: 7,
                        Blocks: 15,
                        SlamDunks: 10,
                    },
                    "DeSagna Diop": {
                        Number: 2,
                        Shoe: 14,
                        Points: 24,
                        Rebound: 12,
                        Assits: 12,
                        Steals: 4,
                        Blocks: 5,
                        SlamDunks: 5,
                    },
                    "Ben Gordon": {
                        Number: 8,
                        Shoe: 15,
                        Points: 33,
                        Rebound: 3,
                        Assits: 2,
                        Steals: 1,
                        Blocks: 1,
                        SlamDunks: 0,
                    },
                    "Brendan Haywood": {
                        Number: 33,
                        Shoe: 15,
                        Points: 6,
                        Rebound: 12,
                        Assits: 12,
                        Steals: 22,
                        Blocks: 5,
                        SlamDunks: 12,
                    },
                
                }
            },
        }
    return teamsObject;
}

function homeTeamName() {
    return gameObject().home.teamName;
}
function numPointsScored(playerName) {
    let object = gameObject();
    if (object.home.players[playerName])
        return object.home.players[playerName].Points;
    else
    return object.away.players[playerName].Points;
    
}
function shoeSize(playerName) {
    let object = gameObject();
    if (object.home.players[playerName])
        return object.home.players[playerName].Shoe;
    else
    return object.away.players[playerName].Shoe;
}

function teamColors(team) {
    let object = gameObject();
    if (object.home.teamName)
        return object.home.colors;
    else
        return object.away.colors;
    
}
function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
}

function playerNumbers(team) {
    let object = gameObject();
    const number = [];

    if (object.home.teamName == team)
    {
        for (const index in object.home.players) {
            number[index] = object.home.players[index].Number;
        }
        return number;
    }
    else {
        for (const index in object.away.players) {
            number[index] = object.away.players[index].Number;
        }
        return number;
    }
        
}
function playerStates(playerName) {
    let object = gameObject();
    if (object.home.players[playerName])
        return object.home.players[playerName];
    else
    return object.away.players[playerName];  
}
function bigShoeRebound() {
    let object = gameObject();
    let homePlayersShoeSize = object.home.players;
    let awayPlayersShoeSize = object.away.players;
    const homeRebounds = largestShoeSize(homePlayersShoeSize);
    const awayRebounds = largestShoeSize(awayPlayersShoeSize);
    if (homeRebounds[0] > awayRebounds[0])
        return homeRebounds[1];
    else
        return awayRebounds[1];
}

function largestShoeSize(homeOrAway) {
    let largestPlayer = 0;
    let playerRebounds = 0;
    for (const index in homeOrAway) {
        if (homeOrAway[index].Shoe > largestPlayer) {
            largestPlayer = homeOrAway[index].Shoe;
            playerRebounds = homeOrAway[index].Rebound;
        }
    }
    return [largestPlayer,playerRebounds];
}
console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Alan Anderson"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerStates("Alan Anderson"));
console.log(playerNumbers("Brooklyn Nets"));
console.log(bigShoeRebound());

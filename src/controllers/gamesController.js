const games = require("../models/games.json");

const updateGamePut = (request, response) => {
    const id = parseInt(request.params.id);
    const gameUpdated = request.body;

    const gameIds = games.map(game => game.id);
    const updateIndex = gameIds.indexOf(id);
    
    if(updateIndex != -1) {
        const gameUpdatedPlusId = {id, ...gameUpdated};
        games.splice(updateIndex, 1, gameUpdatedPlusId);
        return response.status(200).json(games.find(game => game.id === id));
    }

    return response.status(400).send("Error");
}

const gameUpdatePatch = (request, response) => {
    const id = parseInt(request.params.id);
    const gameUpdate = request.body;

    const gameToBeUpdated = games.find(game => game.id === id);

    if(gameToBeUpdated) {

        for(key in gameUpdate) {
            gameToBeUpdated[key] = gameUpdate[key];
        }
        return response.status(200).json(games.find(game => game.id === id));
    }
    
    return response.status(400).send("Error");
}

module.exports = {
    updateGamePut,
    gameUpdatePatch
}
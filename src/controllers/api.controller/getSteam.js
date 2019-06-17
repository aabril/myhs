const { promisify } = require('util');
const request = require('request');

/**
 * GET /api/steam
 * Steam API example.
 */
async function getSteam (req, res, next) {
    const steamId = req.user.steam;
    const params = { l: 'english', steamid: steamId, key: process.env.STEAM_KEY };
    const getAsync = promisify(request.get);
  
    // get the list of the recently played games, pick the most recent one and get its achievements
    const getPlayerAchievements = () =>
      getAsync({ url: 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/', qs: params, json: true })
        .then(({ request, body }) => {
          if (request.statusCode === 401) {
            throw new Error('Invalid Steam API Key');
          }
          if (body.response.total_count > 0) {
            params.appid = body.response.games[0].appid;
            return getAsync({ url: 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/', qs: params, json: true })
              .then(({ request, body }) => {
                if (request.statusCode === 401) {
                  throw new Error('Invalid Steam API Key');
                }
                return body;
              });
          }
        });
    const getPlayerSummaries = () => {
      params.steamids = steamId;
      return getAsync({ url: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/', qs: params, json: true })
        .then(({ request, body }) => {
          if (request.statusCode === 401) {
            throw Error('Missing or Invalid Steam API Key');
          }
          return body;
        });
    };
    const getOwnedGames = () => {
      params.include_appinfo = 1;
      params.include_played_free_games = 1;
      return getAsync({ url: 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/', qs: params, json: true })
        .then(({ request, body }) => {
          if (request.statusCode === 401) {
            throw new Error('Missing or Invalid Steam API Key');
          }
          return body;
        });
    };
    try {
      const { playerstats } = await getPlayerAchievements();
      const playerSummaries = await getPlayerSummaries();
      const ownedGames = await getOwnedGames();
      res.render('original/api/steam', {
        title: 'Steam Web API',
        ownedGames: ownedGames.response,
        playerAchievemments: playerstats.success ? playerstats : null,
        playerSummary: playerSummaries.response.players[0]
      });
    } catch (err) {
      next(err);
    }
};

module.exports = getSteam


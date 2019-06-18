const { promisify } = require('util');
const ig = require('instagram-node').instagram();

/**
 * GET /example/instagram
 * Instagram API example.
 */
async function getInstagram (req, res, next) {
  const token = req.user.tokens.find(token => token.kind === 'instagram');
  ig.use({ client_id: process.env.INSTAGRAM_ID, client_secret: process.env.INSTAGRAM_SECRET });
  ig.use({ access_token: token.accessToken });
  try {
    const userSearchAsync = promisify(ig.user_search);
    const userAsync = promisify(ig.user);
    const userSelfMediaRecentAsync = promisify(ig.user_self_media_recent);
    const searchByUsername = await userSearchAsync('richellemead');
    const searchByUserId = await userAsync('175948269');
    const myRecentMedia = await userSelfMediaRecentAsync();
    res.render('original/example/instagram', {
      title: 'Instagram API',
      usernames: searchByUsername,
      userById: searchByUserId,
      myRecentMedia
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getInstagram


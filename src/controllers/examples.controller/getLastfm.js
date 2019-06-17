const { LastFmNode } = require('lastfm');

/**
 * GET /example/lastfm
 * Last.fm API example.
 */
async function getLastfm (req, res, next) {
    const lastfm = new LastFmNode({
      api_key: process.env.LASTFM_KEY,
      secret: process.env.LASTFM_SECRET
    });
    const getArtistInfo = () =>
      new Promise((resolve, reject) => {
        lastfm.request('artist.getInfo', {
          artist: 'Roniit',
          handlers: {
            success: resolve,
            error: reject
          }
        });
      });
    const getArtistTopTracks = () =>
      new Promise((resolve, reject) => {
        lastfm.request('artist.getTopTracks', {
          artist: 'Roniit',
          handlers: {
            success: ({ toptracks }) => {
              resolve(toptracks.track.slice(0, 10));
            },
            error: reject
          }
        });
      });
    const getArtistTopAlbums = () =>
      new Promise((resolve, reject) => {
        lastfm.request('artist.getTopAlbums', {
          artist: 'Roniit',
          handlers: {
            success: ({ topalbums }) => {
              resolve(topalbums.album.slice(0, 3));
            },
            error: reject
          }
        });
      });
    try {
      const { artist: artistInfo } = await getArtistInfo();
      const topTracks = await getArtistTopTracks();
      const topAlbums = await getArtistTopAlbums();
      const artist = {
        name: artistInfo.name,
        image: artistInfo.image ? artistInfo.image.slice(-1)[0]['#text'] : null,
        tags: artistInfo.tags ? artistInfo.tags.tag : [],
        bio: artistInfo.bio ? artistInfo.bio.summary : '',
        stats: artistInfo.stats,
        similar: artistInfo.similar ? artistInfo.similar.artist : [],
        topTracks,
        topAlbums
      };
      res.render('original/example/lastfm', {
        title: 'Last.fm API',
        artist
      });
    } catch (err) {
      if (err.error !== undefined) {
        console.error(err);
        // see error code list: https://www.last.fm/example/errorcodes
        switch (err.error) {
          // potentially handle each code uniquely
          case 10: // Invalid API key
            res.render('original/example/lastfm', {
              error: err
            });
            break;
          default:
            res.render('original/example/lastfm', {
              error: err
            });
        }
      } else {
        next(err);
      }
    }
};

module.exports = getLastfm


function getGoogleMaps (req, res) {
    res.render('original/api/google-maps', {
      title: 'Google Maps API',
      google_map_api_key: process.env.GOOGLE_MAP_API_KEY
    });
};

module.exports = getGoogleMaps


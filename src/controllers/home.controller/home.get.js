/**
 * GET /
 * Home page.
 */
function homeController(req, res) {
    const theme = 'original'
    const themePaths = {
      'original': 'original/home',
      'kelkenny': 'kelkenny/home',
      'newtheme': 'newtheme/home'
    }
    const themePath = themePaths[theme]
    const dataObject = {
      title: 'Home'
    }
    res.render(themePath, dataObject)
};
  
module.exports = homeController
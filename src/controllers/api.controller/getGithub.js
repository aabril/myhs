/**
 * GET /api/github
 * GitHub API Example.
 */
async function getGithub (req, res, next) {
    const github = new GitHub();
    try {
      const { data: repo } = await github.repos.get({ owner: 'sahat', repo: 'hackathon-starter' });
      res.render('original/api/github', {
        title: 'GitHub API',
        repo
      });
    } catch (error) {
      next(error);
    }
  };
  
module.exports = getGithub


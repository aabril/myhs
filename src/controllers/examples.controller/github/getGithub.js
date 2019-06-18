const GitHub = require('@octokit/rest');

/**
 * GET /example/github
 * GitHub API Example.
 */
async function getGithub (req, res, next) {
    const github = new GitHub();
    try {
      const { data: repo } = await github.repos.get({ owner: 'sahat', repo: 'hackathon-starter' });
      res.render('original/example/github', {
        title: 'GitHub API',
        repo
      });
    } catch (error) {
      next(error);
    }
  };
  
module.exports = getGithub


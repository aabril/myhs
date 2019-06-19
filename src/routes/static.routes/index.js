const express = require('express');
const path = require('path');

function staticRoutes(app){
  app.use('/', express.static(path.join(__dirname, '../../static'), { maxAge: 31557600000 }));
  app.use('/original/js/lib', express.static(path.join(__dirname, '../../../node_modules/chart.js/dist'), { maxAge: 31557600000 }));
  app.use('/original/js/lib', express.static(path.join(__dirname, '../../../node_modules/popper.js/dist/umd'), { maxAge: 31557600000 }));
  app.use('/original/js/lib', express.static(path.join(__dirname, '../../../node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
  app.use('/original/js/lib', express.static(path.join(__dirname, '../../../node_modules/jquery/dist'), { maxAge: 31557600000 }));
  app.use('/original/webfonts', express.static(path.join(__dirname, '../../../node_modules/@fortawesome/fontawesome-free/webfonts'), { maxAge: 31557600000 }));
}

module.exports = staticRoutes
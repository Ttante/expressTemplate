exports = module.exports = function (router ) {

  router.use(function(req, res, next) {
    // do logging
    console.log('request issued!');
    next(); // make sure we go to the next routes and don't stop here
  });


  router.get('/', function(req, res) {
    res.render('index');
  });

  // ping rails api
}
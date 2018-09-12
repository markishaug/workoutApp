// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sandbox.html"));
  });

  // returning user login
  app.get("/rtn-login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/return-user-login.html"));
  });

  // update the assessment test
  app.get("/take-test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/update-test.html"));
  });

  // workout now page
  app.get("/rtn-user-gotoWOD", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/workoutnow.html"));
  });

  // user profile page
   app.get("/gotoProfile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-profile.html"));
  });

  // goto splash page
  app.get("/launch", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/wod", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/wodsandbox.html"));
  });

};



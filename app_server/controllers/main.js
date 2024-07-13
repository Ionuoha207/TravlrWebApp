// app_server/controllers/main.js
module.exports.index = function(req, res) {
    res.render('index', { title: 'Travlr Getaways' });
};

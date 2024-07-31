const fetch = require('node-fetch');

const tripsEndpoint = 'http://localhost:3000/api/trips';

const travel = async (req, res) => {
    try {
        const response = await fetch(tripsEndpoint);
        const trips = await response.json();
        res.render('travel', { title: 'Travlr Getaways', trips });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    travel
};

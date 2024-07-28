const mongoose = require('./db');
const Trip = require('./models/travlr');
const trips = [
    {
        code: 'NEPAL1',
        name: 'Nepal Adventure',
        length: '14 days',
        start: '2024-08-16',
        resort: 'Nepal Resort',
        perPerson: '$2000',
        image: 'nepal.jpg',
        description: 'A thrilling adventure in Nepal.'
    },
    // Add more sample trips here
];

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDB().catch(err => {
    console.error(err);
    mongoose.connection.close();
});

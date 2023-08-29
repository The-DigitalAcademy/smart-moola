const db = require('../config/db.config');
const IndebtQ = require('../models/IndebtQ.model'); // Adjust the path as needed

// Controller function to create a new IndebtQ entry
async function createIndebtQ(req, res) {
    try {
        const newIndebtQ = await IndebtQ.create(req.body);
        return res.status(201).json(newIndebtQ);
    } catch (error) {
        console.error("Error creating IndebtQ:", error);
        return res.status(500).json({ error: "An error occurred while creating IndebtQ." });
    }
}

// Controller function to retrieve all IndebtQ entries
async function getAllIndebtQ(req, res) {
    try {
        const allIndebtQ = await IndebtQ.findAll();
        return res.status(200).json(allIndebtQ);
    } catch (error) {
        console.error("Error fetching IndebtQ entries:", error);
        return res.status(500).json({ error: "An error occurred while fetching IndebtQ entries." });
    }
}

// Add more controller functions as needed for updating, deleting, or querying specific entries

module.exports = {
    createIndebtQ,
    getAllIndebtQ
}
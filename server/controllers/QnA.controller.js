const db = require('../config/db.config');

const QnA = require("../models/QnA.model"); // Import the Sequelize model for "User"


const storeQuestion = async (request, response) => {
    const { question, answer } = request.body;

    console.log(question + "quiz", answer + "ans")

    try {

        // Create a new user using Sequelize's 'create' method
        const newQnA= await QnA.create({
            question: question,
            answer: answer,
          
        });

        // Send a response with the newly created user data
        response.status(201).send({ message: `QnA added with ID: ${newQnA.id}` });
    } catch (error) {
        console.error("Error creating QnA", error);
        response.status(500).send({ error: "Internal server error" });
    }
};

const getAllQuestions = async (request, response) => {
    try {
        // Use Sequelize's 'findAll' method to get all users from the database
        const questions = await QnA.findAll();

        // Send the array of user objects as the response
      return  response.status(200).json(questions);
    } catch (error) {
        console.error("Error fetching questions", error);
        response.status(500).send({ error: "Internal server error" });
    }
};

const getFrombody = async (request,response)=>{

    
const {email,myname} = request.body;

return console.log(email,myname)

}

module.exports = {
    storeQuestion,
    getAllQuestions,
    getFrombody
    // deleteAll
}
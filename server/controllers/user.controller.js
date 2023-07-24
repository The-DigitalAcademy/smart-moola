const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const JwtSecret = require('../config/JwtSecret.config')

const db = require('../config/db.config');

const createUser = (request, response) => {
    const { fullName, email, password, confirmPassword } = request.body;

    console.log(fullName + "fullName", email + "email", password + "password", confirmPassword, " confirmPassword")

    bcrypt.genSalt(10, (error, salt) => {
        if (error) {
            console.log("Cannot create userll")
            throw error;
        }

        bcrypt.hash(password, salt, (error, hashedPassword) => {
            if (error) {
                console.log("Cannot create user")
                throw error;
            }

            db.query("INSERT INTO users (fullName, email, password, confirmPassword) VALUES ($1, $2, $3, $4) RETURNING *", [fullName, email, hashedPassword, confirmPassword], (error, results) => {
                if (error) {
                    console.log("Cannot create user");
                    throw error;
                }
                response.status(201).send({ message: `User added with ID: ${results.rows[0].id}` });
            });
        });
    });

    setTimeout(function () {
        console.log("Timeout");
    }, 3000);
};

const getUsers =  (request, response) => {
    db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)

    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { fullName, email, password } = request.body

    db.query(
        "UPDATE users SET fullName = $1, email = $2, password = $3 WHERE id = $4",
        [username, names, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const findOne = async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];

    try {
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const User = await findOne(email);
        console.log("User", User)

        if (!User) {
            return res.status(404).send({ message: "Bad Credentials" });
        }

        const dbPass = User.password;

        const pass = bcrypt.compareSync(password, dbPass);

        console.log('Entered Password:', password);
        console.log('Database Password:', dbPass);
        console.log('Password Comparison Result:', pass);

        if (!pass) {
            return res.status(401).send({
                message: "Invalid password",
            });
        }

        let token = jwt.sign({ id: User.id }, JwtSecret.secret, {
            expiresIn: 86400,
        });

        const { id, fullName, role } = User;

        res.status(200).send({
            id: id,
            fullName: fullName,
            email: email,
            role: role,
            accessToken: token
        });
    } catch (err) {
        res.status(500).send({ message: err.message + "Testing" });
    }
};

exports.deleteAll = (req, res) => {
    User.deleteMany({})
        .then((data) => {
            res.status(200).send({
                message: `${data.deletedCount} Users were deleted successfully!`,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all users.",
            });
        });
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    login,
    // deleteAll
}
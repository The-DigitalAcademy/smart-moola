module.exports = mongoose => {

    const User = mongoose.model(
        "user", mongoose.Schema(
            {
                fullName: String,
                email: String,
                password: String,
                confirmPassword: String,
            }
        )
    );

    return User;
}
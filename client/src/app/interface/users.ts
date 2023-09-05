// User model 
export interface User {
    id: Number,
    fullName: String,
    email: String,
    password: String,
    confirmPassword: String
}
// User login model 
export interface UserLogin {
    email: String,
    password: String
}
// Updating password model 
export interface PasswordUpdate {
    password: string,
    confirmPassword: string
}
// Registering a user model
export interface CreateUserResponse {
    message: string;
    id: number;
    fullName: string;
    email: string;
}
// Loggin in response model
export interface LoginResponse {
    id: string;
    fullName: string;
    email: string;
    role: string;
    accessToken: string;
}

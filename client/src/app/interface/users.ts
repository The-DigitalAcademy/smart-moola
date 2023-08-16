export interface User {
    id: Number,
    fullName: String,
    email: String,
    password: String,
    confirmPassword: String
}

export interface UserLogin {
    email: String,
    password: String
}

export interface CreateUserResponse {
    message: string;
    id: number;
    fullName: string;
    email: string;
}

export interface LoginResponse {
    id: string;
    fullName: string;
    email: string;
    role: string;
    accessToken: string;
}


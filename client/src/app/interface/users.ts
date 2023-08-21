export interface User {
    id: number,
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface UserLogin {
    email: string,
    password: string
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


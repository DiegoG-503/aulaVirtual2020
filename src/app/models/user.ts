export interface Roles{
    administrador ?: boolean;
    profesor ?: boolean;
    alumno ?: boolean;
}

export interface userInterface{
    id ?: string;
    email ?: string;
    password ?: string;
    roles : Roles;
}
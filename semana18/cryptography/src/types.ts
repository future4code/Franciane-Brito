export type authenticationData = {
    id: string
}

export type userCredencial = {
    email: string
    password: string
}

export type userPersonalInfo = {
    name: string
    nickname: string
}

export type user = {
    id: string
    email: string
    password: string

}

export enum userRole {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
 }
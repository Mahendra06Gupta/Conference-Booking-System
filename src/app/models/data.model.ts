export interface UserData {
    name: string;
    id: string;
    email: string;
    password: string;
    type: string;
    logged: boolean;
}

export function getUser(userEntities: UserData[]): UserData {

    for (const user of userEntities) {
        if (user.logged === true) {
            return user;
        }
    }
}

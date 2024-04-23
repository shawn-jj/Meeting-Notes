import { userLogin } from '../utils/Client';

export const login = async(email, password, persistent) => {
    const loginRequest = {
        email,
        password,
    };
    return new Promise((resolve, reject) => {
        userLogin(loginRequest).then(res => {

            // ticked remember me
            if (persistent) {
                // save the data of logged in user into local storage
                localStorage.setItem("current_user", JSON.stringify(res.data));
            }
            else {
                // user data will be deleted after closing the window or tab
                sessionStorage.setItem("current_user", JSON.stringify(res.data));
            }
            resolve();

        }).catch(err => {
            reject(err);
        });
    });
}

export const loadUserData = () => {
    const sessionData = sessionStorage.getItem("current_user");
    const localData = localStorage.getItem("current_user");

    if (sessionData != null) {
        return JSON.parse(sessionData);
    }
    else if (localData != null) {
        return JSON.parse(localData);
    }
    else {
        return null;
    }
}

export const logout = () => {
    sessionStorage.removeItem("current_user");
    localStorage.removeItem("current_user");
}
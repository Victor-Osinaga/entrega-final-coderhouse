import jwt from "jsonwebtoken"

const PRIVATE_KEY = "private";

function genAuthToken(data) {
    return new Promise((resolve, reject) => {
        jwt.sign({ data }, PRIVATE_KEY, { expiresIn: '2h' }, (error, encoded) => {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(encoded);
            }
        });
    });
}

export {
    genAuthToken
}
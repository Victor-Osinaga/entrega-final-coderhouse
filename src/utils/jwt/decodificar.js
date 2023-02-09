import jwt from "jsonwebtoken"

const PRIVATE_KEY = "private";

function decodificar(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(decoded);
            }
        });
    });
}

export{
    decodificar
}
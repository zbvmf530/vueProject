const crypto = require('crypto');
const { resolve } = require('path');

const pw = crypto.createHash('sha512')
            .update('pw1234')
            .digest('base64');
console.log(pw);

const createSalt = () =>{
return new Promise((resolve,reject)=>{
    crypto.randomBytes(64,(err,buf)=>{
        if(err) reject(err);
        resolve(buf.toString("base64"));
    })
})
};

const createCryptoPassword = async (plainPassword)=>{
    const salt = await createSalt();

    return new Promise((resolve,reject)=>{
        crypto.pbkdf2(plainPassword,salt,100000,64,"sha512",(err,key)=>{
            if(err) reject(err);
            resolve({password: key.toString("base64"),salt});
        });
    });

};

const getCryptoPassword = (plainPassword,salt)=>{
    return new Promise((resolve,reject)=>{
        crypto.pbkdf2(plainPassword,salt,9999,64,"sha512", (err,key)=>{
            if(err) reject(err);
            resolve({password: key.toString("base64"),salt});
        });
    });
};

createCryptoPassword('pw1234')
.then(result=>console.log(result));

createCryptoPassword('pw1234')
.then(result=>console.log(result));

getCryptoPassword('pw1234','AmoF1RBfKLPb4dy2f4M1HXEUeR9g8ZmLTCoPhabaKQTq2W1sD+h0CO+67beTqSY8FkujC+C9sc0vy/Do2aFkfA==')
.then(result=>console.log(result));
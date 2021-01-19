const NodeRSA = require("node-rsa");
const fs = require("fs");

const publicKey = new NodeRSA();
const privateKey = new NodeRSA();

const public = fs.readFileSync("./keys/public.pem", "utf8");
const private = fs.readFileSync("./keys/private.pem", "utf8");

publicKey.importKey(public);
privateKey.importKey(private);

const Encrypt = (DATA) => {
  const encrypted = publicKey.encrypt(DATA, "base64");
  return encrypted;
};

// console.log("Licence ", Encrypt("naman.aggarwal2001@gmail.com"));

const Decrypt = (licence) => {
  const decrypted = privateKey.decrypt(licence, "utf8");
  return decrypted;
};
console.log("Licence ", Decrypt(LICENCE));

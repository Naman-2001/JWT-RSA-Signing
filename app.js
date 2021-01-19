const NodeRSA = require("node-rsa");
const fs = require("fs");

const GeneratePair = () => {
  const key = new NodeRSA().generateKeyPair();

  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  fs.openSync("./keys/public.pem", "w");
  fs.writeFileSync("./keys/public.pem", publicKey, "utf8");

  fs.openSync("./keys/private.pem", "w");
  fs.writeFileSync("./keys/private.pem", privateKey, "utf8");
};

GeneratePair();

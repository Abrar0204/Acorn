const admin = require("firebase-admin");
const serviceAccount = require("../serviceKey/acorn-3e774-firebase-adminsdk-gt1pk-557cfd5c1e.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;

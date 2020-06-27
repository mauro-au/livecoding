const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
router.get("/livecoding/:id", async (req, res) => {
    const livecoding = await admin
        .firestore()
        .collection("livecodingos")
        .doc(req.params.id)
        .get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                return doc.data()
            } else {
                console.log("No such document!");
                return {}
            }
        });
    res.send(livecoding);
});
router.get("/livecodings", async (req, res) => {
    const livecodings = await admin
        .firestore()
        .collection("livecodingos")
        .get();
    var lista = [];
    livecodings.docs.forEach(doc => {
        lista.push({ id: doc.id, data: doc.data() });
    });
    res.send(lista);
});
router.post("/livecoding", async (req, res) => {
    await admin
        .firestore()
        .collection("livecodingos")
        .add(req.body);
    res.send(req.body);
});
router.put("/livecoding/:id", async (req, res) => {
    const livecoding = await admin
        .firestore()
        .collection("livecodingos")
        .doc(req.params.id)
        .update(req.body);
    res.send(livecoding);
});
router.delete("/livecoding/:id", async (req, res) => {
    const livecoding = await admin
        .firestore()
        .collection("livecodingos")
        .doc(req.params.id)
        .delete();
    res.send(livecoding);
});
exports.livecodings = functions.https.onRequest(router);
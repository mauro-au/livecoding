const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
router.get("/course/:id", async (req, res) => {
    const course = await admin
        .firestore()
        .collection("courses")
        .doc(req.params.id)
        .get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                return { id: doc.id, data: doc.data() }
            } else {
                console.log("No such document!");
                return {}
            }
        });
    res.send(course);
});
router.get("/courses", async (req, res) => {
    const courses = await admin
        .firestore()
        .collection("courses")
        .get();
    var lista = [];
    courses.docs.forEach(doc => {
        lista.push({ id: doc.id, data: doc.data() });
    });
    res.send(lista);
});
router.post("/course", async (req, res) => {
    const course = await admin
        .firestore()
        .collection("courses")
        .add(req.body)
        .then(docRef => {
            return docRef.id
        });
    res.send(course);
});
router.put("/course/:id", async (req, res) => {
    const course = await admin
        .firestore()
        .collection("courses")
        .doc(req.params.id)
        .update(req.body).then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                return doc.data()
            } else {
                console.log("No such document!");
                return {}
            }
        });
    res.send(course);
});
router.delete("/course/:id", async (req, res) => {
    const course = await admin
        .firestore()
        .collection("courses")
        .doc(req.params.id)
        .delete();
    res.send(course);
});
exports.courses = functions.https.onRequest(router);
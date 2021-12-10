import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js"
import { getFirestore, collection, addDoc, Timestamp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyC5pHPE51DmrVEiYQbtKObs79r4suI4s6M",
    authDomain: "contact-form-4e378.firebaseapp.com",
    projectId: "contact-form-4e378",
    storageBucket: "contact-form-4e378.appspot.com",
    messagingSenderId: "481361726316",
    appId: "1:481361726316:web:614aab69884b09798f0149"
};

initializeApp(firebaseConfig);

document.getElementById('form').addEventListener('submit', send)

function send(e) {
    e.preventDefault()
    if (!document.getElementById('email').value || !document.getElementById('textarea').value || document.getElementById('security').value != 25) {
        alert('Need to check all fields')
        return
    }
    try {
        const db = getFirestore()
        addDoc(collection(db, 'textarea'), {
            timestamp: Timestamp.fromDate(new Date()),
            message: document.getElementById('textarea').value,
            email: document.getElementById('email').value
        })
        document.getElementById('email').value = ''
        document.getElementById('textarea').value = ''
        document.getElementById('security').value = ''

        alert('Thanks for sending a message')
    } catch (error) {
        console.log(error);
    }
}


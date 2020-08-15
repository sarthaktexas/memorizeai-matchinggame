var express = require('express');
var router = express.Router();
const firebase = require('firebase/app')
firebase.initializeApp({
  apiKey: 'AIzaSyDfSkXDJ4kQCrRGfyauprPKPPoGZFEhySU',
  authDomain: 'memorize-ai.firebaseapp.com',
  databaseURL: 'https://memorize-ai.firebaseio.com',
  projectId: 'memorize-ai',
  storageBucket: 'memorize-ai.appspot.com',
  messagingSenderId: '629763488334',
  appId: '1:629763488334:web:9199305a713b3634',
  measurementId: 'G-N98QHH5MJ8'
})
require('firebase/firestore')
const firestore = firebase.firestore();
const document = 'jPzs1gjrc2m1YntnTJKc';
//const decks = firestore.collection('decks').get();
//const decks = firestore.collection('decks').where('slugId', '===', SLUG_ID).limit(1).get();
//const cards = firestore.collection('decks').where('slugId', '===', SLUG_ID).limit(1).get();
const cards = firestore.collection('decks');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    var cardListArray = [];
    cards.forEach(doc => {
      //cardListArray.push(doc.data());
    	console.log(doc.id, '=>', doc.data().name);
    });
    console.log(cardListArray);
    res.render('index', {
      title: 'Response',
      cards: cardListArray
    });
  } catch (error) {
    res.render('index', {
      title: 'error'
    });
    console.log(error);
  }
});

module.exports = router;
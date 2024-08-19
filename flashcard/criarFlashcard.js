  const { flashcards } = require('../data.js');

  function criarFlashcard(flashcard){
    flashcard.id = flashcards.lenght +1;
    flashcards.push(flashcard);
 }

 module.exports = criarFlashcard;
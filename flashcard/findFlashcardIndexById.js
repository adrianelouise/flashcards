  const { flashcards } = require('../data.js');

  function findFlashcardIndexById(id){
    return flashcards.findIndex(flash => flashcards.id === id);
}

module.exports = findFlashcardIndexById;
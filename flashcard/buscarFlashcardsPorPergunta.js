   const { flashcards} = require('../data.js');

   function buscarFlashcardsPorPergunta(pergunta){
    return flashcards.filter(flashcards => flashcards.pergunta.toLocaleLowerCase().includes(pergunta.toLocaleLowerCase()));
 }

 module.exports = buscarFlashcardsPorPergunta;

console.log("Herro");


let sentence = ["The", "Walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let betterSentence = ["But", "Dad", "it's", "shark", "week"];


iterativeWords = [];


function addExcitement(taco, exclaim) {
    for(let i = 0; i < sentence.length; i++) {
        iterativeWords += taco[i] + " ";
        console.log(iterativeWords);
        let character = i + 1;
        if(character % 3 === 0) {
            let counter = character / 3;
            let excited = exclaim;
            iterativeWords += excited.repeat(counter) + " ";
            console.log(iterativeWords);
        }
    }
}

addExcitement(sentence, "!");
// newSentence(betterSentence, "~");
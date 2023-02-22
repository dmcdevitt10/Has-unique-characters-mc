// Write your code below
function uniqueLetters(string){
    let word = string.split('');
    for(i = 0; i < word.length; i++){
        for(let j = 0; j < word.length; j++){
            if(i !== j && word[i] === word[j]){
                return false
            }
        }
    }
    return true
}

console.log(uniqueLetters('Monday'))
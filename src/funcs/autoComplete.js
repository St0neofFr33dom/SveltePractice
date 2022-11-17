export default function autoComplete(value,array){
    let predictedArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i].substr(0, value.length).toUpperCase() == value.toUpperCase()) {
            let matchedWord = array[i].substr(0, value.length);
            matchedWord.toUpperCase()
            matchedWord += array[i].substr(value.length);
            predictedArray.push(matchedWord)
        }
    }
    return predictedArray
}
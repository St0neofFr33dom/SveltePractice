export default function capitalise(word) {
    let firstLetter = word.slice(0,1)
    let restOfWord = word.slice(1)
    let newWord = firstLetter.toUpperCase() + restOfWord.toLowerCase()
    return newWord
}
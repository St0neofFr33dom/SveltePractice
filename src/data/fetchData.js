import fs from "fs"
import axios from "axios"

async function fetchMoves(){
    const response = await axios("https://pokeapi.co/api/v2/move?limit=844")
    const results = response.data.results
    let fileBody = ""
    for (let i = 0; i< results.length; i++){
        fileBody += `${results[i].name} \n`
    }
    fs.writeFile('moves.txt',fileBody,function (err){
        if (err) {
            console.log(err);
        } else {
            console.log("File saved");
        }
    })
    return
}

async function fetchAbilities(){
    const response = await axios("https://pokeapi.co/api/v2/ability?limit=327")
    const results = response.data.results
    let fileBody = ""
    for (let i = 0; i< results.length; i++){
        fileBody += `${results[i].name} \n`
    }
    fs.writeFile('abilities.txt',fileBody,function (err){
        if (err) {
            console.log(err);
        } else {
            console.log("File saved");
        }
    })
    return
}

async function fetchPokemon(){
    const response = await axios("https://pokeapi.co/api/v2/pokemon?limit=1154")
    const results = response.data.results
    let fileBody = ""
    for (let i = 0; i< results.length; i++){
        fileBody += `${results[i].name} \n`
    }
    fs.writeFile('pokemon.txt',fileBody,function (err){
        if (err) {
            console.log(err);
        } else {
            console.log("File saved");
        }
    })
    return
}

// fetchPokemon()
// fetchAbilities()
// fetchMoves()
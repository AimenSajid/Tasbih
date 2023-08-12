import { snapshotOfDB } from "./Select.js"
import { duasDB, database } from "./Modules/Module.js"
import {ref, get, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const counterText = document.getElementById('counter')
const incrementButton = document.getElementById('incrementer')
const decrementButton = document.getElementById('decrementer')
incrementButton.addEventListener('click', increaseCounter)
decrementButton.addEventListener('click', decreaseCounter)
const duaContentDiv = document.getElementById('duaContent')

let countValue = 0; 
function increaseCounter(){
    countValue+=1
    counterText.textContent = countValue
}
function decreaseCounter(){
    if(countValue > 0){
        countValue--
        counterText.textContent = countValue
    }
}
function getClickedIdValue(){
    const urlParams = new URLSearchParams(window.location.search)
    const duaIdValue = urlParams.get('duaID')
    return duaIdValue
}
function setDuaContentDiv(){
    const clickedID = getClickedIdValue()
    const refDB = ref(database)
    const path = "duas/"+clickedID
    let dua = ""
    get(child(refDB, path)).then((snapshot)=>{
        if(snapshot.exists()){
            dua = snapshot.val().value
            duaContentDiv.innerHTML = `<span>${dua}</span>`
        }
    })    
}
setDuaContentDiv()
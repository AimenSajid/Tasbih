import {duasDB} from "./Modules/Module.js"
import {onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


let clickedID = ""
let snapshotOfDB = ""
onValue(duasDB, function(snapshot) {
    if(snapshot.exists()){
        snapshotOfDB = snapshot
        const duas = Object.entries(snapshot.val())
        for (let i = 0; i < duas.length; i++) {
            renderElement(duas[i])
        }
    }
})

function createElement(val){
    const duainfo = val[1]
    const duaKey = val[0]
    const divEl = `<a href="Counter.html?duaID=${duaKey}">
                        <div class="selections flex-centre" id="${duaKey}">
                            <p>${duainfo.name}</p>
                        </div>
                    </a>`

    return divEl
}

function renderElement(val){
    const renderDiv = document.getElementById("mainDiv")
        const element = createElement(val)
        renderDiv.innerHTML += element
} 
export{snapshotOfDB}

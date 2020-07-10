// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

/* 

{
    "topics": [
        "javascript",
        "bootstrap",
        "technology",
        "jquery",
        "node.js"
    ]
}

*/

import axios from 'axios'

const parentTab = document.querySelector('.topics')
function makeTabs(dataInfo){
const tabs = document.createElement('div')
tabs.classList.add('tab')

tabs.textContent = dataInfo


return tabs
}

const topicsURL = "https://lambda-times-backend.herokuapp.com/topics"

axios.get(topicsURL).then(function(value){
    console.log(value)
    value.data.topics.forEach(item => {
        parentTab.appendChild(makeTabs(item));
    })
}).catch(function(error){
    console.log('we did not receive the data sir')
})
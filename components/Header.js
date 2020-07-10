// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header() {
    // create my elements
    const headDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const title = document.createElement('h1')
    const temperature = document.createElement('span')

    // create the structure next

    headDiv.appendChild(dateSpan)
    headDiv.appendChild(title)
    headDiv.appendChild(temperature)

    // give classes
    headDiv.classList.add('header')
    dateSpan.classList.add('date')
    temperature.classList.add('temp')

    // give them text content 
    dateSpan.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    temperature.textContent = "98°"

    return headDiv
}

// Declering all global variable
const chatOpen = document.querySelector('#chat');
const chatClose = document.querySelector('#close');
const mainCont = document.querySelector('#main-cont');
const chatCont = document.querySelector('.chat-container');
const subContOne = document.querySelector('#sub-cont-1');
const subContTwo = document.querySelector('#sub-cont-2');
const typeOne = document.querySelector('#type-1');
const typeTwo = document.querySelector('#type-2');
const actBtnOne = document.querySelector('#act-1');
const actBtnTwo = document.querySelector('#act-2');

// Chat open function
chatOpen.onclick = function() {
    mainCont.style.display = 'flex';
}

// Chat close function
chatClose.onclick = function() {
    mainCont.style.display = 'none';
}

// Copy subContOne by clicking actBtnOne
actBtnOne.addEventListener('click', ()=> {
    const clone = subContOne.cloneNode(true);
    chatCont.appendChild(clone);
    // Replace h3 txt by typeOne 
    clone.childNodes[3].textContent = typeOne.value;
    // Clear value after user input
    typeOne.value = '';
    // Delete new subContOne
    const delContOne = clone.childNodes[5];
        delContOne.onclick = function() {
            const parentDiv = this.parentElement;
            parentDiv.style.display = 'none';
        }
});

// // Copy subContTwo by clicking actBtnTwo
actBtnTwo.addEventListener('click', ()=> {
    const clone = subContTwo.cloneNode(true);
    chatCont.appendChild(clone);
    // Replace h3 txt by typeTwo
    clone.childNodes[3].textContent = typeTwo.value;
    // Clear value after user input
    typeTwo.value = '';
    // Delete new subContTwo
    const delContTwo = clone.childNodes[1];
    delContTwo.onclick = function() {
        const parentDiv = this.parentElement;
        parentDiv.style.display = 'none';
    }
});
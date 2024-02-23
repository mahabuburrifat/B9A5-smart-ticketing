// -------------next part-------------

function addNextClick(elementId){
    const article1 = document.getElementById(elementId);
    article1.classList.add('hidden');
}
function next(){
    addNextClick('header-full');
    addNextClick('main-full-article-1');
    addNextClick('footer-full');

    removeNextClick('main-full-article-2')
}

// -----------------------continue part------------

function addContinueClick(elementId){
    const article2 = document.getElementById(elementId);
    article2.classList.add('hidden');
}

function removeNextClick(elementId){
    const article1 = document.getElementById(elementId);
    article1.classList.remove('hidden');
}
function continu(){
    removeNextClick('header-full');
    removeNextClick('main-full-article-1');
    removeNextClick('footer-full');

    addNextClick('main-full-article-2');
}

// ------------click button div section---------
function clickBtnDiv(elementId){
    const addClickBtn = document.getElementById(elementId);
    addClickBtn.classList.add('bg-green-500');

}
function clickSeat(){
    clickBtnDiv('click-btn-div');
}

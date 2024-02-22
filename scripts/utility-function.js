// -------------next part-------------

function addNextClick(elementId){
    const article1 = document.getElementById(elementId);
    article1.classList.add('hidden');
}
function next(){
    addNextClick('header-full');
    addNextClick('main-full-article-1');
    addNextClick('footer-full')
}

// -----------------------continue part------------

function addContinueClick(elementId){
    const article2 = document.getElementById(elementId);
    article2.classList.add('hidden');
}
function continu(){
    addContinueClick('main-full-article-2');
    removeNextClick('header-full');
    removeNextClick('main-full-article-1');
    removeNextClick('footer-full');

}

function removeNextClick(elementId){
    const article1 = document.getElementById(elementId);
    article1.classList.remove('hidden')
}
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML=counter;
    localStorage.setItem('counter', counter);
    
    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`)
    }
}
//adding an eventlister to the entire document to trying to find the button, h1 etc.
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    //after all the content of the DOM loaded, then run the function
    document.querySelector('button').onclick = count;
});
//count is the function that is need to run when click on the button
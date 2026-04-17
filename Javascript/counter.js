        let counter = 0;
        function count() {
            counter++;
            document.querySelector('h1').innerHTML=counter;
            
            if (counter % 10 === 0) {
                alert(`Count is now ${counter}`)
            }
        }
        //adding an eventlister to the entire document to trying to find the button, h1 etc.
        document.addEventListener('DOMContentLoaded', function(){
            //after all the content of the DOM loaded, then run the function
            document.querySelector('button').onclick = count;
            setInterval(count, 1000);
        });
        //count is the function that is need to run when click on the button
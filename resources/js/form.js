document.addEventListener('DOMContentLoaded', submitResult);

function submitResult(){
    document.getElementById('submitName').addEventListener('click', function(event){
        let req = new XMLHttpRequest();
        let loading = {firstName: null, lastName: null};
        loading.firstName = document.getElementById('firstName').value;
        loading.lastName = document.getElementById('lastName').value;
        
        req.open("POST", "http://httpbin.org/post", true);
        req.setRequestHeader('Content-type', 'application/json');
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                let response=JSON.parse(req.responseText);
                document.getElementById('thanks').textContent = "Thank you for sharing! :)"
                document.getElementById('result').textContent = "Your Korean name is " + response.json.lastName + response.json.firstName;    
            } else {
                console.log("Error in network request:" + req.statusText);
            }
        });
        req.send(JSON.stringify(loading));
        event.preventDefault();
    });
    
}


    





//code counter
var button=document.getElementById('counter');
button.onclick=function(){
    //Create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not yet done
    };
    
    //Make the request
    request.open('GET','http://http://arunpriyadharmaraj73.imad.hasura-app.io/counter',true);
    request.send(null);
};
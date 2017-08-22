//Submit username

var submit=document.getElementById('submit_btn');
submit.onclick = function(){
  //Create a request object
    var request=new XMLHttpRequest();
  
  //capture a list of nmae and render it as a list
  request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                  console.log('user logged in');
                  alert('Logged in successfully');
            }else if(request.status === 403){
                alert('username/password is incorrect');
            }else if(request.status === 500){
                alert('something went wrong');
            }
        }
  };
   //Make the request
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://arunpriyadharmaraj73.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type':'application/json');
    request.send(JSON.stringify({username:username,password:password}));
};
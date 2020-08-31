function validation(){
    var fname = document.getElementsByClassName('first-name')[0].value;
    var lname = document.getElementsByClassName('last-name')[0].value;
    var email = document.getElementsByClassName('useremail')[0].value;
    var pswd = document.getElementsByClassName('user-password')[0].value;
    var pswdd = document.getElementsByClassName('confirm-password')[0].value;
    var usernamecheck = /^[A-za-z.]{3,30}$/;
    var userpswdcheck = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[+@#$%^&*!.()-]).{8,}/;
    var emailcheck = /^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,3}$/;
    
    var counter=0;
    if(usernamecheck.test(fname)){
        document.getElementById('name-error').innerHTML = "";
    }else{
        counter++;
        document.getElementById('name-error').innerHTML = "First Name is invalid";
    }

    if(usernamecheck.test(lname)){
        document.getElementById('nameerror').innerHTML = "";
    }else{
        counter++;
        document.getElementById('nameerror').innerHTML = "Last Name is invalid";
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = "";
    }else{
        counter++;
        document.getElementById('emailerror').innerHTML = "Username is invalid";
    }

    if(userpswdcheck.test(pswd)){
        document.getElementById('passworderror').innerHTML = "";
    }else{
        counter++;
        document.getElementById('passworderror').innerHTML = "Password is invalid";
    }

    if(pswd.match(pswdd)){
        document.getElementById('passworderror').innerHTML = "";

    }else{
        counter++;
        document.getElementById('passworderror').innerHTML = "Password does'nt match!"
    }
    if(counter > 0)
    {
        return false;
    }
    alert("Form Successfully Submitted");
    location.reload();
}

function togglePass(){ 
    (pwd.type == 'password') ? pwd.type = 'text' : 
    pwd.type = 'password';
    eye.classList.toggle('active');      
}


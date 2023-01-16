function validateForm(){

    var name = document.frm.name.value;
    var email = document.frm.email.value;
    var sub = document.frm.subject.value;
    var text = document.frm.message.value;

    var regex = /^[a-zA-Z]\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/gm;

    var res = document.getElementById("js-response");

    res.setAttribute("style" , "background-color:red;");

    if(name.length < 4){
        res.innerHTML = "Enter your name ( should contain atleast 4 letters ) !";
        return false;
    }
    if(regex.test(email) == false){
        res.innerHTML = "Entered email is not valid !";
        return false;
    }
    if(sub.length < 5){
        res.innerHTML = "Your subject is too small !";
        return false;
    }
    if(text.length < 10){
        res.innerHTML = "Your message is too small !";
        return false;
    }
    res.setAttribute("style" , "background-color:green;");
    res.innerHTML = "Email sent !";

    return true;

}

document.getElementById("my-website").innerHTML = window.location.href;
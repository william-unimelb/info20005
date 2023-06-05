function validateForm(){
    var fname = document.forms.orderForm.fname.value;
    var lname = document.forms.orderForm.lname.value;
    var email = document.forms.orderForm.email.value;
    var phone = document.forms.orderForm.phone.value;
    var add1 = document.forms.orderForm.add1.value;
    var add2 = document.forms.orderForm.add2.value;
    var city = document.forms.orderForm.city.value;
    var country = document.forms.orderForm.country.value;
    var state = document.forms.orderForm.state.value;
    var postcode = document.forms.orderForm.postcode.value;
    if(fname == ""){
        console.log("Please enter a Firstname here to continue");
       alert("Please enter a Firstname here to continue");
       document.getElementById('fname').focus();
       return false;
    }
    if(lname == ""){
       alert("Please enter a Lastname here to continue");
       document.getElementById('lname').focus();
       return false;
    }
    if(email == ""){
       alert("Please enter a email here to continue");
       document.getElementById('email').focus();
       return false;
    }
    if(phone == ""){
       alert("Please enter a phone here to continue");
       document.getElementById('phone').focus();
       return false;
    }
    if(add1 == ""){
       alert("Please enter a Address Line 1 here to continue");
       document.getElementById('add1').focus();
       return false;
    }
    if(add2 == ""){
       alert("Please enter a Address Line 2 here to continue");
       document.getElementById('add2').focus();
       return false;
    }
    if(city == ""){
       alert("Please enter a city here to continue");
       document.getElementById('city').focus();
       return false;
    }
    if(country == ""){
       alert("Please enter a country here to continue");
       document.getElementById('country').focus();
       return false;
    }
    if(city == ""){
       alert("Please enter a country here to continue");
       document.getElementById('country').focus();
       return false;
    }
    if(state == ""){
       alert("Please enter a state here to continue");
       document.getElementById('state').focus();
       return false;
    }
    if(postcode == ""){
       alert("Please enter a postcode here to continue");
       document.getElementById('postcode').focus();
       return false;
    }
    if(fname !="" && lname !="" && email !="" && phone !="" && add1 !="" && add2 !="" && city !="" && 
    country !="" && state !="" && postcode !="" ){
        localStorage.setItem('fullname', fname +' '+ lname);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('add1', add1);
        localStorage.setItem('add2', add2);
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
        localStorage.setItem('state', state);
        localStorage.setItem('postcode', postcode);
        window.location.href = "checkout-2";
        location.reload();
    } else {
        alert("Please enter a all fields to continue");
        location.reload();
    }

    console.log("Form validated successfully");

    // If form is valid, advance to next page
    window.location.href = "checkout-2";
    return false;
};
function cvalidateForm(){
    var cardHolder = document.forms.cForm.cardHolder.value;
    var cardNumber = document.forms.cForm.cardNumber.value;
    var cardDate = document.forms.cForm.cardDate.value;
    var cardCVV = document.forms.cForm.cardCVV.value;
    var cardZip = document.forms.cForm.cardZip.value;
    if(cardHolder == ""){
       alert("Please enter a Card Holder Name here to continue");
       document.getElementById('cardHolder').focus();
       return false;
    }
    if(cardNumber == ""){
       alert("Please enter a Card Number here to continue");
       document.getElementById('cardNumber').focus();
       return false;
    }
    if(cardDate == ""){
       alert("Please enter a Expiry Date here to continue");
       document.getElementById('cardDate').focus();
       return false;
    }
    if(cardCVV == ""){
       alert("Please enter Card CVV here to continue");
       document.getElementById('cardCVV').focus();
       return false;
    }
    if(cardZip == ""){
       alert("Please enter a Zip Code here to continue");
       document.getElementById('cardZip').focus();
       return false;
    }
    
    if(cardHolder !="" && cardNumber !="" && cardDate !="" && cardCVV !="" && cardZip !="" ){
        localStorage.setItem('cardHolder', cardHolder);
        localStorage.setItem('cardNumber', cardNumber);
        localStorage.setItem('cardDate', cardDate);
        localStorage.setItem('cardCVV', cardCVV);
        localStorage.setItem('cardZip', cardZip);
        window.location.href = "checkout-3";
    } else {
        alert("Please enter a all fields to continue");
        location.reload();
    }

    // If form is valid, advance to next page
    window.location.href = "checkout-3";
    return false;
};

if(localStorage.getItem('fullname')){
    console.log(localStorage.getItem('fullname'))
    // document.getElementById('fullname').innerText = localStorage.getItem('fullname');
    console.log(document.getElementById('fullname'))
    document.getElementById('fullname').innerText = 333;
}
if(localStorage.getItem('email')){
    document.getElementById('email').innerText = localStorage.getItem('email');
}
if(localStorage.getItem('phone')){
    document.getElementById('phone').innerText = localStorage.getItem('phone');
}
if(localStorage.getItem('city')){
    document.getElementById('city').innerText = localStorage.getItem('city');
}
if(localStorage.getItem('add1')){
    document.getElementById('add1').innerText = localStorage.getItem('add1');
}
if(localStorage.getItem('add2')){
    document.getElementById('add2').innerText = localStorage.getItem('add2');
}
if(localStorage.getItem('state')){
    document.getElementById('state').innerText = localStorage.getItem('state');
}
if(localStorage.getItem('postcode')){
    document.getElementById('postcode').innerText = localStorage.getItem('postcode');
}
if(localStorage.getItem('cardNumber')){
    document.getElementById('cardNumber').innerText = localStorage.getItem('cardNumber');
}
if(localStorage.getItem('cardHolder')){
    document.getElementById('cardHolder').innerText = localStorage.getItem('cardHolder');
}

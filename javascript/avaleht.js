  function datasend() {
    var x, text;
  
    // Get value of the input fields
    name = document.getElementById("fname").value;
    email = document.getElementById("lname").value;
    message = document.getElementById("subject").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name=="" || email=="" || message==""){
        text="Palun täitke kõik väljad!";
    }
    else if(!(email.match(mailformat))) {
        text="Palun sisestage korrektne e-posti aadress!";
    }
    else{
        text="";
        alert("Täname!");
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        document.getElementById("subject").value="";
    }
    document.getElementById("demo").innerHTML = text;
  }
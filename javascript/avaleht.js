  function datasend() {
    var x, text;
  
    // Get value of the input fields
    name = document.getElementById("fname").value;
    email = document.getElementById("lname").value;
    message = document.getElementById("subject").value;

    if (name=="" || email=="" || message==""){
        text="Palun täitke kõik väljad!";
    }
    else{
        text="Täname!";
    }
    document.getElementById("demo").innerHTML = text;
  }
function SendComment(Distinction) {

    document.getElementById('ContactSubmit').disabled = true;

    const name = document.getElementById('first-name').value;
    const surname = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const response = document.getElementById('message').value;
    const recipient = "akweshie.pamela04@gmail.com";
    var body = "";
    var subject = "";
    if (Distinction == "1"){
        body = "Good Day \n \nThe following is an inquiry from gentle-hands.co.bw contact page along with the following customer information \n \nName: " + name + "\nSurname: " + surname +  "\nPhone number: " +phone + "\nEmail: " + email + "\nMessage: " + response +"\n \nPlease respond to the customer at your earliest convenience\n \nThank you \n \nGentle Hands Dental";
        subject = "Customer Inquiry";
    }
    else if(Distinction == "2"){
        body = "Good Day \n \nA request has been made from directcapital.co.bw, the following is customer information \n \nName: " + name + "\nSurname: " + surname +  "\nPhone number: " +phone + "\nEmail: " + email + "\nProcedure: " + response +"\n \nPlease respond to the customer at your earliest convenience\n \nThank you \n \nGentle Hands Dental";
        subject = "Customer Query Appointment";
    }

    if(name == "" || surname == ""||phone == "" || email == ""||response == ""||body == "")
    {
        showErrorToast("Missing Details!","Please provide all required information in the form before submitting.");
        document.getElementById('ContactSubmit').disabled = false;

    }
    else{
        fetch('/email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            recipient,
            subject,
            body,
        }),
        })
        .then(response => response.json())
        .then(data => {
            
            showSuccessToast("Success!","Your submission has been successful. We will get back to you as soon as possible.");
            document.getElementById('ContactSubmit').disabled = false;

        })
        .catch(error => {
            showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert us ASAP!.");
            document.getElementById('ContactSubmit').disabled = false;

        });
    }
  };
  
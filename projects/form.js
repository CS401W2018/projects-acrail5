document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");

    const color = document.getElementById('color').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const gender = document.getElementById('gender').value;
    const agree = document.getElementById('agree').value;

    if (!color) {
        alert("You need to enter your color.");
        return;
    }

    if (!phone) {
        alert("You need to enter your Phone Number.");
        return;
    }

    if (phone.length < 10 || phone.length > 15) {
        alert("Phone number must be between 10 and 15 digits.");
        return;
    }

    const formData = {
        color: color,
        email: email,
        pass: pass,
        state: state,
        phone: phone,
        name: name,
        gender: gender,
        agree: agree,
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            alert ('Form submitted successfully.');

        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    alert(`Success: ${email}`);
    console.log(formData);
});
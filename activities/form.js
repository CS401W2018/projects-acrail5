document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");

    const color = document.getElementById('color').value;
    const email = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;

    if (!color) {
        alert("You need to enter your color.");
        return;
    }

    const formData = {
        color: color,
        email: mail,
        password: pass
    };
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert ('Form submitted successfully.');
        } else if (xhr.readyState ===4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    alert(`Success: ${mail}`);
});
document.getElementById('fanForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");

    const name = document.getElementById('name').value;
    const favorite = document.getElementById('favorite').value;
    const arc = document.getElementById('arc').value;
    const comments = document.getElementById('comments').value;

    if (!name) {
        alert("You need to enter your Name.");
        return;
    }

    if (!favorite) {
        alert("You need to enter your Favorite Character.");
        return;
    }

    if (!arc) {
        alert("Please enter your favorite arc");
        return;
    }

    const formData = {
        name: name,
        favorite: favorite,
        arc: arc,
        comments: comments
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
    alert(`Success: ${name}`);
    console.log(formData);
});
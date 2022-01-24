function hasNumber(myString) {
    return /\d/.test(myString);
}

function validateForm() {
    let name_elem = document.forms["contactForm"]["name"];
    let age_elem = document.forms["contactForm"]["age"];
    let mail_elem = document.forms["contactForm"]["email"];
    let message_elem = document.forms["contactForm"]["message"];

    let name = name_elem.value;
    let age = age_elem.value;
    let mail = mail_elem.value;
    let message = message_elem.value;

    if (name === "" || age === "" || mail === "" || message === "" || !validateEmail(mail)) {

        if (name === "") {
            alert("Please enter a name.");
            return false;
        }
        if (name !== "" && hasNumber(name)) {

            alert("Please enter a valid name. Name cannot contain numbers");
            return false;
        }
        if (age !== "" && !hasNumber(age)) {
            alert("Please enter a valid age. Age field must contain only numbers");
            return false;
        }
        if (age !== "" && (age <= 0)) {
            alert("Please enter a valid age. Age cannot be less or equal zero");
            return false;
        }
        if (age !== "" && (age > 200)) {
            alert("Please enter a valid age. Age cannot be more than 200");
            return false;
        }
        if (mail === "") {
            alert("Please enter an e-mail.");
            return false;
        }
        if (message === "") {
            alert("Please enter a message.");
            return false;
        }
    }
    return true;
}

function makeTextVisible() {
    let text2 = document.getElementById("more-info-text");
    if (text2.style.display === "none") {
        text2.style.display = "block";
    } else {
        text2.style.display = "none";
    }
}

function createMoreText() {
    $('#text-box').append(
        $('<div/>')
            .attr("id", "newDiv1")
            .addClass("newDiv purple bloated")
            .append("<span/>")
            .text("Adette Bruce has a sister called Laura Bruce, who is a famous businesswoman. They grew up far away from the city together, on their parents' farm.")
    );
}
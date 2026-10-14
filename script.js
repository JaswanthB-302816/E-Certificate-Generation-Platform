// LOGIN

const loginButton = document.querySelector("#loginButton");

const loginCard = document.querySelector("#loginCard");

const dashboard = document.querySelector("#dashboard");


loginButton.addEventListener("click", function () {

    const email = document.querySelector("#email").value;

    const password = document.querySelector("#password").value;


    if (email === "") {

        alert("Please enter your email");

        return;
    }


    if (password === "") {

        alert("Please enter your password");

        return;
    }


    loginCard.style.display = "none";

    dashboard.style.display = "block";

});


// CREATE CERTIFICATE BUTTON

const createCertificateButton =
    document.querySelector("#createCertificateButton");

const certificateForm =
    document.querySelector("#certificateForm");


createCertificateButton.addEventListener("click", function () {

    dashboard.style.display = "none";

    certificateForm.style.display = "block";

});


// GENERATE CERTIFICATE

const generateButton =
    document.querySelector("#generateButton");

const certificate =
    document.querySelector("#certificate");


generateButton.addEventListener("click", function () {

    const studentName =
        document.querySelector("#studentName").value;

    const registerNumber =
        document.querySelector("#registerNumber").value;

    const course =
        document.querySelector("#course").value;

    const date =
        document.querySelector("#certificateDate").value;


    if (studentName === "") {

        alert("Please enter student name");

        return;
    }


    if (registerNumber === "") {

        alert("Please enter register number");

        return;
    }


    if (course === "") {

        alert("Please enter course");

        return;
    }


    if (date === "") {

        alert("Please select date");

        return;
    }


    document.querySelector("#displayStudentName").textContent =
        studentName;

    document.querySelector("#displayRegisterNumber").textContent =
        registerNumber;

    document.querySelector("#displayCourse").textContent =
        course;

    document.querySelector("#displayDate").textContent =
        date;


    certificateForm.style.display = "none";

    certificate.style.display = "block";

});
const form = document.querySelector("form");

function sendEmail() {
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const mess = document.getElementById("message").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "techncode.ds@gmail.com",
        Password : "08B88C2308E2E7F80FD4F43A2EAA31FC56AD",
        To : 'techncode.ds@gmail.com',
        From : "techncode.ds@gmail.com",
        Subject : subject,
        Body : "<strong>Adresse e-mail de l'envoyeur : </strong>" + email + "<br>" + "<strong>Prénom : </strong>" + prenom + "<br>" + "<strong>Nom : </strong>" + nom + "<br>" + "<strong>Numéro de téléphone : </strong>" + phone + "<br>" + "<strong>Message : </strong><br>" + mess
    }).then(
      message => alert("Votre message a bien été envoyé ! Votre demande sera traitée dans les plus brefs délais.")
    );
}

function checkInput() {
    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const mess = document.getElementById("message");
    if (prenom.value === "") 
    {
        prenom.style.border = "3px solid red";
        prenom.placeholder = "Veuillez renseigner ce champ";
        prenom.focus();
        prenom.style.backgroundColor = "#FFC0CB";
    }
    else if (nom.value === "")
    {
        nom.style.border = "3px solid red";
        nom.placeholder = "Veuillez renseigner ce champ";
        nom.focus();
        nom.style.backgroundColor = "#FFC0CB";
    }
    else if (email.value === "")
    {
        email.style.border = "3px solid red";
        email.placeholder = "Veuillez renseigner ce champ";
        email.focus();
        email.style.backgroundColor = "#FFC0CB";
    }
    else if (subject.value === "")
    {
        subject.style.border = "3px solid red";
        subject.placeholder = "Veuillez renseigner ce champ";
        subject.focus();
        subject.style.backgroundColor = "#FFC0CB";
    }
    else if (mess.value === "")
    {
        mess.style.border = "3px solid red";
        mess.placeholder = "Veuillez renseigner ce champ";
        mess.focus();
        mess.style.backgroundColor = "#FFC0CB";
    }
    else {
        prenom.style.border = "3px solid green";
        nom.style.border = "3px solid green";
        email.style.border = "3px solid green";
        phone.style.border = "3px solid green";
        subject.style.border = "3px solid green";
        mess.style.border = "3px solid green";
        prenom.style.backgroundColor = "#DCDFE4";
        nom.style.backgroundColor = "#DCDFE4";
        email.style.backgroundColor = "#DCDFE4";
        phone.style.backgroundColor = "#DCDFE4";
        subject.style.backgroundColor = "#DCDFE4";
        mess.style.backgroundColor = "#DCDFE4";
        sendEmail();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
})
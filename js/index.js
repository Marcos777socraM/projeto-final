function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_pdbgvsj"
    const templateID = "template_51mab6s"

    emailjs
    .send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("message").value = "",
            console.log(res);
            alert("Your message sent successfuly!");
        })
    .catch((err) => console.log(err));
}
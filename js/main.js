function payment() {
    document.getElementById("signupForm").submit();
    alert("Redirecting to payment gateway...");
    var year = new Date().getFullYear();
    var schoolEmail = document.getElementsByName("School email")[0].value;
    window.location.href = 'https://bunq.me/esrac/5/Membership Fee ' + year + ' ' + schoolEmail;
}
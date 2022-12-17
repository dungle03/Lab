const Name = document.querySelector('#Name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const pass = document.querySelector('#password')
const cnfpass = document.querySelector('#cnfpassword')
const rating = document.querySelector('#rate')

const submit = document.querySelector('#submit')

const regexname = /^[a-z A-Z]+$/
const regexemail = /^[a-zA-Z0-9]+@[a-z]+\.[a-z\.]+$/
const regexphone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
const regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const regexrating = /^[0-9]+$/

let check = 0;

submit.addEventListener('click', function (even) {
    even.preventDefault();
    // Truong ten
    if (Name.value.trim().length == 0) {
        alert("Vui long nhap ten")
    } else if (regexname.test(Name.value) == false) {
        alert("Nhap sai dinh dang ten")
    } else {
        check++;
    }

    //Truong email
    if (email.value.trim().length == 0) {
        alert("Vui long nhap email")
    } else if (regexemail.test(email.value) == false) {
        alert("Nhap sai dinh dang email")
    } else {
        check++;
    }

    //Truong phone
    if (phone.value.trim().length == 0) {
        alert("Vui long nhap so dien thoai")
    } else if (regexphone.test(phone.value) == false) {
        alert("Nhap sai dinh dang so dien thoai")
    } else {
        check++;
    }

    //Truong password
    if (pass.value.trim().length == 0) {
        alert("Vui long nhap pass")
    } else if (cnfpass.value.trim().length == 0) {
        alert("Vui long nhap lai pass")
    } else if (regexpass.test(pass.value) == false) {
        alert("Nhap sai dinh dang pass")
    } else if (pass.value !== cnfpass.value) {
        alert("Mat khau khong trung nhau")
    } else {
        check++;
    }

    //Truong Rating
    if (rating.value.trim().length == 0) {
        alert("Vui long nhap rating")
    } else if (regexrating.test(rating.value) == false) {
        alert("Ma sv")
    } else {
        check++;
    }

    if (check === 5) {
        alert("Form da nhap dung")
    }
    check = 0;
});
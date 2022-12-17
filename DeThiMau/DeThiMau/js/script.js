// coding implementation

// const regexname = /^[a-z A-Z]+$/
// const regexemail = /^[a-zA-Z0-9]+@[a-z]+\.[a-z\.]+$/
// const regexphone = /(^\d{10}$)|(^\d{3}-\d{3}-\d{4}$)|(^\d{3} \d{3} \d{4}$)|(^\d{3}\.\d{3}\.\d{4}$)|(^\(\d{3}\) \d{3}-\d{4}$)|(^\+\d{2} \(\d{3}\) \d{3}-\d{4}$)/ 
// phone
///\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

// password
//^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
// const regexpass = /^[a-zA-Z0-9]{6,}$/
// const regexrating = /^[0-9]+$/





function validate() {
    var email = document.getElementById('email').value; // kiểm tra email
    var regexEmail = /^[a-zA-Z0-9]+@[a-z]+\.[a-z\.]+$/;

    var comment = document.getElementById('com').value; // kiểm tra tên
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    var rate = document.getElementById('rate').value; // kiểm tra số
    //var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (email == '' && comment == '' && rate == '')
    {
        alert("Sinh Vien Le Dinh Dung Vui long nhap day du thong tin !");
        return false;
    }

    if (email == '' || email == null)
    {
        alert("Email khong duoc de trong !");
        return false;
    }
    else if (!regexEmail.test(email))
    {
		alert("Email không hợp lệ!");
        email = '';
        return false;
    }

    if (rate == '' || rate == null)
    {
        alert("Rate khong duoc de trong !");
        return false;
    }
    else if (isNaN(rate) || rate < 0 || rate > 10)
    {
		alert("Rate phai la so tu 0 -> 10 !");
        rate = '';
        return false;
    }

    alert("Gui thong tin thanh cong !");
    return true;
}
// end coding implementation
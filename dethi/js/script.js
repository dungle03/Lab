function validate()
{
    var email = document.getElementById('email').value; // kiểm tra email
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var comment = document.getElementById('com').value; // kiểm tra tên
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    var rate = document.getElementById('rate').value; // kiểm tra số
    var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

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
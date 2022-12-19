// coding implementation

// javascript Câu 3

function validate() {
    var email = document.getElementById('email').value; // kiểm tra email
    var rate = document.getElementById('rate').value; // kiểm tra số
    var regexRating = /^[0-9]+$/;

    if (email == '' && comment == '' && rate == '')
    {
        alert("Vui long nhap day du thong tin !");
        return false;
    }

    if (email == '' || email == null)
    {
        alert("Email khong duoc de trong !");
        return false;
    }

    if (rate == '' || rate == null)
    {
        alert("Rate khong duoc de trong !");
        return false;
    }
    else if (isNaN(rate) || !regexRating.test(rate))
    {
		alert("Rate phai la so ");
        rate = '';
        return false;
    }

    alert("Gui thong tin thanh cong !");
    return true;
}

// end coding implementation
// coding implementation
function checknull(txt){
    if(txt.value.length==0)    return true;
    else return false;
}
function validform(f){
    if(checknull(email)){
        alert("Email khong duoc bo trong");
        f.email.focus();
        return;
    }
    if(checknull(com)){
        alert("Comment khong duoc bo trong");
        return;
    }
    if(checknull(rate))
    {
        alert("Rating khong duoc bo trong");
        f.rate.focus();
        return;
    }
    if(isNaN(f.rate.value))
    {
        alert("Rating phai la so");
        f.rate.value="";
        f.rate.focus();
        return;
    }
    alert("Cap nhat thanh cong")
}
// end coding implementation
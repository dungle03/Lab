// Ham validator 
function Validator(options){

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // lặp qua từng yêu cầu và kiểm tra 
        for(var i = 0; i < rules.length; i++){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else{
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove('invalid');
        }

        return !errorMessage;
    }

    // lấy element của form
    var formElement = document.querySelector(options.form);
    if(formElement){
        // Khi submit form
        formElement.onsubmit = function (e){
            e.preventDefault();


            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
            });
        }

        // Lặp qua mỗi rule và xử lý 
        options.rules.forEach(function (rule){

            // Lưu lại rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            } else{
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement){
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                }

                // xử lý mỗi khi người dùng nhập vào input không báo lỗi
                inputElement.oninput = function (){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// Dinh nghia cac rules 
// nguyen tac cua cac rule: 
// 1. Khi co loi  => tra ra message loi
// 2. Khi hop le  => tra ra undifinded


// Required
Validator.isRequired = function(selector){
    return{
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'Please fill this field';
        }
    };
}
// Full Name
Validator.isName = function (selector){
    return{
        selector: selector,
        test: function(value){
            if(value.trim() == "") return 'Name is not valid'; 
            var regexname = /^[ a-zA-Zỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ']+$/;
            return regexname.test(value) ? undefined : 'Name is not valid';
        }
    };
}

// Mail
Validator.isEmail = function (selector){
    return{
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Email is not valid';
        }
    };
}
// password

/*Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character*/
Validator.isPassword = function(selector){
    return{
        selector: selector,
        test: function(value){
            var passregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;
            return passregex.test(value) ? undefined : ('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue){
    return{
        selector: selector,
        test: function (value){
            return value == getConfirmValue() ? undefined : 'Password are not the same';
        }
    };
}




// user ID 
Validator.isUserid = function(selector){
    return{
        selector: selector,
        test: function(value){
            var idregex = /^[A-Za-z0-9]{5,12}$/;
            return idregex.test(value) ? undefined : "User id is not valid";
        }
    }
}



// Phone Number
Validator.isPhoneN = function(selector){
    return{
        selector: selector,
        test: function(value){
            var pnregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
            return pnregex.test(value) ? undefined : "Phone number is not valid";
        }
    }
}

// Date of Birth
Validator.isDOB = function(selector){
    return{
        selector: selector,
        test: function(value){
            var dobregex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
            return dobregex.test(value) ? undefined : "Date is not valid";
        }
    };
}

// Rating
Validator.isRating= function(selector){
    return{
        selector: selector,
        test: function(value){
            var re=/((\+|-)?([0-9]+)(\.[0-9]+)?)|((\+|-)?\.?[0-9]+)/;
            if( !re.test(value.trim())) return "Rating is not valid";
            if(value<0 || value>10) return "Rating is not valid";
            return undefined;
        }
    };
}
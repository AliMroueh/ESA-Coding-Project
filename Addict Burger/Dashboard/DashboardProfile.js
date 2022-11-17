$(document).ready(function(){
    $('#email').on('blur', function(){
        emailValue = $(this).val();
        if(!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)){
        $('.email_required').slideDown()
        // console.log(emailValue.match(/\w+@\w+.\w+/g))
        }else{
            $('.email_required').slideUp()
        }
    })
    $('#password_validation, #password_confirmation').on('focus', function(){
        $('.password_required').slideDown();
    })
    $('#password_validation, #password_confirmation').on('blur', function(){
        $('.password_required').slideUp();
    })

    $('#password_validation').on('keyup', function(){
        passValue = $(this).val();
        confirm_pass = $('#password_confirmation').val();
        console.log(passValue)
        console.log(confirm_pass)

        if(passValue.match(/[a-z]/g)){
            $('.lowercase').addClass('active')
        }else{
            $('.lowercase').removeClass('active')
        }

        if(passValue.match(/[A-Z]/g)){
            $('.capital').addClass('active')
        }else{
            $('.capital').removeClass('active')
        }

        if(passValue.match(/\d/g)){
            $('.number').addClass('active')
        }else{
            $('.number').removeClass('active')
        }

        if(passValue.match(/\W/g)){
            $('.special').addClass('active')
        }else{
            $('.special').removeClass('active')
        }

        if(passValue!='' && !passValue.match(/\s/g)){
            $('.noWhite').addClass('active')
        }else{
            $('.noWhite').removeClass('active')
        }

        if(passValue.length >=  8 ){
            $('.eight_chars').addClass('active')
        }else{
            $('.eight_chars').removeClass('active')
        }

        if(passValue === confirm_pass){
            $('.confirm_password').addClass('active')
        }else{
            $('.confirm_password').removeClass('active')
        }
    })
    $('#password_confirmation').on('keyup', function(){
        passValue = $('#password_validation').val();
        confirm_pass = $(this).val();
        console.log(passValue)
        console.log(confirm_pass)

        if(passValue === confirm_pass){
            $('.confirm_password').addClass('active')
        }else{
            $('.confirm_password').removeClass('active')
        }
    })
  });
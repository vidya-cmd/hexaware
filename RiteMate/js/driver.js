$(document).ready(function(){
    $('#driver-login-form').submit(function(event){
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();
        var message = '';

        if (username === 'driver' && password === 'driver123') {
            message = '<span style="color: green;">Login successful!</span>';
        } else {
            message = '<span style="color: red;">Incorrect username or password.</span>';
        }

        $('#message').html(message);
    });

    // Toggle password visibility
    $('#toggle-password').click(function() {
        var passwordField = $('#password');
        var passwordFieldType = passwordField.attr('type');

        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});

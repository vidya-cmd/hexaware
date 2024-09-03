$(document).ready(function(){
    $('.btn-warning').hover(
        function() {
            $(this).css('background-color', '#ffc107');
        },
        function() {
            $(this).css('background-color', '#FFD700');
        }
    );
});

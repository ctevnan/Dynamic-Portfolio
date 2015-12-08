$(document).ready(function(){

    $('#toggleButtonOne').on('click', function(){

        $('#imageOne').toggle();
        $('#paragraphOne').toggle();
    });

    $('#toggleButtonTwo').on('click', function(){
        $('#imageTwo').toggle();
        $('#paragraphTwo').toggle();
    });

    $('#toggleButtonThree').on('click',function(){
        $('#imageThree').toggle();
        $('#paragraphThree').toggle();
    });

});
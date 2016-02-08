$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://api.github.com/users/ctevnan/repos",
        success: function(commits){
          for (var i = 0; i < commits.length; i++) {
            console.log(commits[i]);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Something went wrong. Oops.");
        }
    }); 
}); 
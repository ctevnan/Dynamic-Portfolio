$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://api.github.com/users/ctevnan/repos",
        success: function(repos) {
          for (var i = 0; i < repos.length; i++) {
            var newListItem = buildListGroup(repos[i]);
            $(".list-group").append(newListItem);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Something went wrong. Oops.");
        }
    });

    function buildListGroup(repoData) {
      var commitsApiUrl = "https://api.github.com/repos/";
      commitsApiUrl += repoData.owner.login + "/";
      commitsApiUrl += repoData.name + "/commits";

      var newLink = $("<a>")
        .attr("href", commitsApiUrl)
        .append(repoData.full_name)
        .addClass("list-group-item")
        .append(repoData.full_name);
      return newLink;
    } 
}); 
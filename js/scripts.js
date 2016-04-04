//Business logic

function toDoList(chore, priority) {
  this.choreName = chore;
  this.priorityName = priority;
}

//User interface logic
$(document).ready(function() {
  $("form#listID").submit(function(event) {
    event.preventDefault();

    var inputtedChore = $("input#choreID").val();
    var inputtedPriority = $("input#priorityID").val();

    var newChore = new toDoList(inputtedChore, inputtedPriority);

    $("ul#choreList").append("<li><span class='choreResult'>" + newChore.choreName  + "</span>" + "-" + "<span class='closer'>" + '[x]' + "</span></li>");
    $(".choreResult").last().click(function() {
      $("#showList").show();
      $("#showList h2").text(newChore.choreName);
      $(".showChore").text(newChore.choreName);
      $(".showPriority").text(newChore.priorityName);
    });

    $("input#choreID").val("");
    $("input#priorityID").val("");

    $(".closer").last().click(function() {
      this.closest('li').remove();
      $("#showList").hide();
    });

  });
});

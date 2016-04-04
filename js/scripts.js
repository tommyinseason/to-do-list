//Business logic

function toDoList(chore, priority) {
  this.choreName = chore;
  this.priorityName = priority;
}

toDoList.prototype.chorePriority = function() {
  return this.choreName;
}

//User interface logic
$(document).ready(function() {
  $("form#listID").submit(function(event) {
    event.preventDefault();

    var inputtedChore = $("input#choreID").val();
    var inputtedPriority = $("input#priorityID").val();

    var newChore = new toDoList(inputtedChore, inputtedPriority);

    $("ul#choreList").append("<li><span class='choreResult'>" + newChore.chorePriority()  + "</span></li>");
    $(".choreResult").last().click(function() {
      $("#showList").show();
      $("#showList h2").text(newChore.choreName);
      $(".showChore").text(newChore.choreName);
      $(".showPriority").text(newChore.priorityName);
    });

    $("input#choreID").val("");
    $("input#priorityID").val("");
  });
});

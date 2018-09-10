$(document).ready(function() {

var complete = ("#complete");
$(complete).on("submit", handleWorkoutSubmit);

function handleWorkoutSubmit(event) {
    event.preventDefault();
    var newWorkout = {
        title: titleInput
          .val()
          .trim(),
        body: bodyInput
          .val()
          .trim(),
        AuthorId: authorSelect.val()
      };
  
  submitPost(newPost);
  function submitPost(post) {
      $.post("/api/posts", post);
    }
  


};
















});
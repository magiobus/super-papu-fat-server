var foodImageForm = $("#foodImageForm");

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(input).css("background-image", "url(" +  e.target.result + ")");
        }

        reader.readAsDataURL(input.files[0]);

        foodImageForm.submit();
    }
}

$("#uploadPhoto").change(function () {
  readURL(this);
});

foodImageForm.submit(function () {

  $(this).ajaxSubmit({
    error: function(xhr) {
     status('Error: ' + xhr.status);
    },
    success: function(response) {
     imageUploaded(response.imageUrl);
    }
 });
  return false;
});

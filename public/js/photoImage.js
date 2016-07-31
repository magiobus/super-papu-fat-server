function readURL(input) {

  console.log('***********')

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(input).css("background-image", "url(" +  e.target.result + ")");
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#uploadPhoto").change(function () {
  console.log('***********')
  readURL(this);
});

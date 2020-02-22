

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${handleUserInput()}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function handleUserInput() {
  return $('.user-input').val(); 
}

function displayResults(responseJson) {
  console.log(responseJson);
  let imageString='';
  for (let i=0;i<responseJson.message.length;i++){
    imageString += `<img src="${responseJson.message[i]}" class="results-img">`;
  }
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    imageString
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
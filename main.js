document.querySelector('.btn').onclick = function () {
  document.querySelector('.message').value = document.querySelector('.text').value;
  document.getElementById('submit_form').click();
};

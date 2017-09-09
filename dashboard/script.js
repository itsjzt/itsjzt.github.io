// select

function select(el) {
  $('.type').removeClass('active');
  $(el).addClass('active');
}

function selectImg(el) {
  $('.options img').removeClass('active');
  $(el).addClass('active');
}

// ajax not implemented yet
function submit(el) {
  const img = $('.ip-file').value
  if (img) return;
  $(el).text('Uploading...')
  setTimeout(() => {
    $(el).text('Submitted')
  }, 3000)
}

const input = document.querySelector('#input')
const result = document.querySelector('#result')

input.addEventListener('keydown', el => {
  if (el.keyCode !== 13) return ;
  console.log('enter pressed')
  result.innerHTML = ''
  finder(input.value)
})


function finder(subreddit) {
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(blob => blob.json() )
  .then(json => json.data.children)
  .then(data =>  data.map(n => n.data))
  .then(redditArr => redditArr.map(r => {
    var text = boilerText(r.author, r.url, r.title, r.ups)
      result.innerHTML += text
    }) 
  )
}

function boilerText(author, url, title, ups) {
  return `
  <div class="reddit--item">
    <div class="small--text ">
      ${author}
    </div>
    <p>
      <a href="${url}" target="_blank">
        ${title} 
        <span class="reddit--ups"> ${ups} </span>
      </a>
    </p>
  </div>` 
}
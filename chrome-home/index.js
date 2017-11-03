// // fetch bing daily image
// var headers = new Headers();

// var init = { 
//   method: 'GET',
//   headers: headers,
//   mode: 'no-cors',
//   cache: 'default' 
// }

// fetch('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', init)
// .then(blob => blob.json())
// .then(resp => resp.url) 
// .then(url => { updateImage(url) })


function updateImage(url) {
  console.log('updating image')
  const fullurl = `http://www.bing.com/${'/az/hprichbg/rb/TaProhm_EN-US10906968982_1920x1080.jpg'}`
  document.querySelector('.wrapper').style.backgroundImage = `url(${fullurl})`
}

updateImage()
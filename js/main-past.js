let onDate = (event) => {
  let userAnswer = document.getElementById('userAnswer').value
  let button = document.getElementById('button').addEventListener('click', function(){
    let userAnswer = document.getElementById('userAnswer').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=kD3UeQZyDJnL2Ksom0hfTXgC5fR4ZtFwW5J2x6J9&date=${userAnswer}`)
  .then(res => res.json())
  .then (response => {
    let imgVid = undefined;
    let media = response["media_type"]
    if (media === "video"){
      let url = response.url;
      document.getElementById('video').src = url;
    } else{
      document.getElementById('img').src = url;
    }
  })
})
}

 onDate();
//      // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//       let imgUrl = []
      // response.drinks.forEach((el)=>{
      //   imgUrl.push(el.strDrinkThumb)
      // })
      // let count = 0
      // setInterval(()=>{
      //   if( count >= imgUrl.length ){
      //     count = 0
      //   }
      //   document.querySelector('img').src = response.drinks[count].strDrinkThumb
      //   count++
      // },500)
      // console.log(imgUrl);
      //document.querySelector('img').src = response.drinks[0].strDrinkThumb
      //document.querySelector('p').textContent = response.drinks[0].strInstructions
      //console.log(response);
      // console.log(response.drinks[0].strDrinkThumb);
    // })
    .catch((err)=> {
        console.log('err:', err)
        alert("sorry, there are no results for your search")
    });///
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

let button = document.getElementById('button')

// .addEventListener("click", () => (onDate()));

button.addEventListener("click", ()=>{
  let date = document.getElementById("userAnswer").value
  // console.log(date);
  fetch(`https://api.nasa.gov/planetary/apod?api_key=kD3UeQZyDJnL2Ksom0hfTXgC5fR4ZtFwW5J2x6J9&date=${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
document.querySelector('img').src = response.url
document.querySelector('video').src = response.url
document.getElementById('title').textContent = response.title
document.getElementById('explanation').textContent = response.explanation
// document.getElementById('button')
// document.getElementById('button').addEventListener('click', onDate(){
 //    document.querySelector('video img').src = response.media_type
   if (response.media_type === 'video'){
document.getElementById('video').src =response.url;
   } else{
     document.getElementById('img').src =response.url;
   }
      // console.log(response.drinks[0].idDrink)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})

 button.addEventListener("click", (event) =>{
   event.preventDefault()
 })

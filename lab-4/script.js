// // Create a request variable and assign a new XMLHttpRequest object to it.
// let request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//   // Begin accessing JSON data here
//   request.onload = function(){
//     let data = JSON.parse(this.response)

//     // check conncention: When an HTTP request is made, the response returns with HTTP status codes. '404' is the most well-known response, meaning Not Found, and '200' OK is a successful request.
//     if (request.status >= 200 && request.status < 400){
//         data.forEach(movie =>{
//             //log each movie's title
//             console.log(movie.title)
//         })
//     }else{
//         console.log('error')
//     }
//   }

class App{
    constructor(){
      this.getLocation();
      this.latitude;
      this.longitude;
    }
  
    getLocation(){
      navigator.geolocation.getCurrentPosition(
        this.myLocation.bind(this),
        this.noLocation.bind(this)
      );
      
    }
  
    myLocation(result){
      this.latitude = result.coords.latitude;
      this.longitude = result.coords.longitude;
      console.log(this.latitude, this.longitude)
    }
  
    noLocation(){
      console.log('error')
    }

    getWeather(){
      let url = `https://api.darksky.net/forecast/befdca694f1063bb1ae93f5046e7abd5/` + this.latitude + `,` + this.longitude;
      // console.log(url);
      fetch(url)
          .then(response => {
             return response.json();
          }).then(data => {
              document.querySelector(".h1").innerHTML = data.currently.summary;
          }) .catch(error=>{
              console.log(error);
          })
    }
  
  }
  
  let app = new App();
    
  // request.send()
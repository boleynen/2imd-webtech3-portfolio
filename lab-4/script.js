class App{
  constructor(){
    this.getLocation();
    this.lat;
    this.lng;
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition(
      this.gotLocation.bind(this), 
      this.noLocation.bind(this)
    );
  }

  gotLocation(result){
    this.lat = result.coords.latitude;
    this.lng = result.coords.longitude;
    this.getWeather();
  }

  getWeather(){
    let url =  `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b0244733d0ff63c362982da9006f233c/${this.lat},${this.lng}?units=si`;

    fetch(url)
      .then(response => {
        return response.json();

      }).then(data => {
        console.log("data = ",data);
        document.querySelector("#weather").innerHTML = data.currently.summary;

      }).catch(err => {
        console.log("error = ",err);
      });
  }

  noLocation(err){
    console.log(err);
  }
}

let app = new App();
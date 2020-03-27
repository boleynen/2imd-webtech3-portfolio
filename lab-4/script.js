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
    this.getDrink();
  }

  getWeather(){
    let url =  `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8dfa886df75136ffadb934898c0769ba/${this.lat},${this.lng}?units=si`;

    fetch(url)
      .then(response => {
        return response.json();

      }).then(data => {
        console.log("data = ",data);
        document.querySelector("#weather").innerHTML = "It's "+ data.currently.summary +" throughout the day!";

      }).catch(err => {
        console.log("error = ",err);
      });
  }

  getDrink(){
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data =>{
      console.log(data);
      console.log(data.drinks[0].strDrink);
      document.querySelector("#drink").innerHTML = "Grab a "+data.drinks[0].strDrink+ " quickly!"
    })
    .catch(err => {
      console.log(err);
    });
  }

  noLocation(err){
    console.log(err);
  }
}

let app = new App();
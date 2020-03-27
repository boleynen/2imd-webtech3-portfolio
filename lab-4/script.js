class App {
  constructor() {
    this.getLocation();
    this.lat;
    this.lng;
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      this.gotLocation.bind(this),
      this.noLocation.bind(this)
    );
  }

  gotLocation(result) {
    this.lat = result.coords.latitude;
    this.lng = result.coords.longitude;
    this.getWeather();
    this.getDrink();
  }

  getWeather() {
    let temperature = localStorage.getItem("temperature");
    setTimeout(() => {
      localStorage.removeItem("temperature");
    }, 1000 * 60 * 60);
    if (temperature == null || temperature == "null") {

      let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8dfa886df75136ffadb934898c0769ba/${this.lat},${this.lng}?units=si`;

      fetch(url)
        .then(response => {
          return response.json();

        }).then(data => {
          temperature = localStorage.setItem("temperature", (data.currently.temperature));
          console.log("weather data = ", data);
          document.querySelector("#degrees").innerHTML = "It's " + data.currently.temperature + "&#176; today!";

        }).catch(err => {
          console.log("error = ", err);
        });

    } else {
      console.log("data from storage");
      console.log(localStorage);
      document.querySelector("#degrees").innerHTML = "It's " + localStorage.getItem("temperature") + "&#176; today!";
    }
  }

  getDrink() {
    let degrees = document.querySelector("#degrees").innerText;
    // let degrees = 25;
    if (degrees >= 20) {

      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(data => {
          // console.log(data);
          // console.log(data.drinks[0].strDrink);
          console.log("too hot!");
          document.querySelector("#drink").innerHTML = "It's too hot ! Cool off with an ice cold " + data.drinks[1].strDrink + "!";
          document.querySelector("#container").setAttribute("class", "strawberry");
          document.querySelector("#weather").setAttribute("class", "strawberryH1");

        })
        .catch(err => {
          console.log(err);
        })

    } else {
      
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(data => {
          // console.log(data);
          // console.log(data.drinks[0].strDrink);
          console.log("too cold!");
          document.querySelector("#drink").innerHTML = "Brr, it's kinda cold outside.. But you decide when summer starts, with a sweet " + data.drinks[4].strDrink + " in your hands.";
          document.querySelector("#container").setAttribute('class', "blue");
          document.querySelector("#weather").setAttribute("class", "blueH1");

        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  noLocation(err) {
    console.log(err);
  }
}

let app = new App();
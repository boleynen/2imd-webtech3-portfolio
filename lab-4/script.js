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
  }

  noLocation(err){
    console.log(err);
  }
}

let app = new App();
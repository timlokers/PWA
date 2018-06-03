$(document).foundation();

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Geo location is not supported by this browser");
    }
}

function showPosition(posistion){
    var location = {
        longitude: posistion.coords.longitude,
        latitude: posistion.coords.latitude
    }
    console.log(location);
}

////////////////////////////////////////////

window.onload = function() {
    let site = document.getElementById("first-create");
    site.style.opacity = "100%";
    let mainText = document.getElementById("title");
    if (localStorage.getItem("firstCar") != null) {
        mainText.innerHTML = "Edit your car profile";
        let carManu = document.getElementById("car-manufacturer");
        let carModel = document.getElementById("car-model");
        let carYear = document.getElementById("car-year");
        let carEngine = document.getElementById("car-engine");
        let carFuel = document.getElementById("car-fuel");
        let carTransmission = document.getElementById("car-transm");
        let car = JSON.parse(localStorage.getItem("firstCar"));
        let addCarButton = document.getElementById("AddEdit");
        let carOwner = document.getElementById("car-owner");
        addCarButton.innerHTML = "Save";
        carManu.value = car.manufacturer;
        carModel.value = car.model;
        carYear.value = car.year;
        carEngine.value = car.engine;
        carFuel.value = car.fuel;
        carTransmission.value = car.transmission;
        carOwner.value = car.owner;
    } else {
        mainText.innerHTML = "Let's create your first car profile";
    }
}

class Car {
    constructor(manufacturer, model, year, engine, fuel, transmission, owner) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.fuel = fuel;
        this.transmission = transmission;
        this.owner = owner;
    }
}

function editCar() {
    let carManu = document.getElementById("car-manufacturer").value;
    let carModel = document.getElementById("car-model").value;
    let carYear = document.getElementById("car-year").value;
    let carEngine = document.getElementById("car-engine").value;
    let carFuel = document.getElementById("car-fuel").value;
    let carTransmission = document.getElementById("car-transm").value;
    let carOwner = document.getElementById("car-owner").value;
    if (carManu === "" || carModel === "" || carYear === "" || carEngine === "" || carFuel === "" || carTransmission === "" || carOwner === "") {
        let error = document.getElementById("warning");
        error.style.opacity = "100%";
    } else {
        let firstCar = new Car(carManu, carModel, carYear, carEngine, carFuel, carTransmission, carOwner);
        localStorage.setItem("firstCar", JSON.stringify(firstCar));
        
        window.location.href = "./sites/car.html";
    }
}

function debugReset() {
    localStorage.clear();
    
}
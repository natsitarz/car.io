///////////////////////////////////////////////////////////////////////////
window.onload = function() {
    if (localStorage.getItem("firstCar") === null) {
        document.getElementById("other-info").style.display = "none";
        document.getElementById("scroll-info").style.display = "none";
        document.getElementById("panel").style.display = "none";
        document.getElementById("gallery").style.display = "none";
        document.getElementById("panel").style.height = "0";
        let carManuModelText = document.getElementById("car-manumodel");
        carManuModelText.innerHTML = "No car added yet. <p style='font-size: 1.5rem; font-weight: lighter;'>Return to the home page and add new car.</p>";
    } else {
        document.getElementById("other-info").style.display = "flex";
        document.getElementById("scroll-info").style.display = "flex";
        document.getElementById("panel").style.display = "grid";
        document.getElementById("panel").display = "flex";
        document.getElementById("panel").style.height = "80%";
        document.getElementById("gallery").style.display = "flex";
        let carManuModelText = document.getElementById("car-manumodel");
        let carYearText = document.getElementById("car-year");
        let carEngineText = document.getElementById("car-engine");
        let carFuelText = document.getElementById("car-fuel");
        let carTransmissionText = document.getElementById("car-transm");
        let carDescText = document.getElementById("car-desc");
        let carOwner = document.getElementById("car-owner");
        carManuModelText.innerHTML = `${JSON.parse(localStorage.getItem("firstCar")).manufacturer} ${JSON.parse(localStorage.getItem("firstCar")).model}`;
        carYearText.innerHTML = JSON.parse(localStorage.getItem("firstCar")).year;
        carEngineText.innerHTML = JSON.parse(localStorage.getItem("firstCar")).engine;
        carFuelText.innerHTML = JSON.parse(localStorage.getItem("firstCar")).fuel;
        carTransmissionText.innerHTML = JSON.parse(localStorage.getItem("firstCar")).transmission;
        carOwner.innerHTML = `Owner: ${JSON.parse(localStorage.getItem("firstCar")).owner}`;
        if (localStorage.getItem("carDescription") == null) {
            localStorage.setItem("carDescription", "No description yet");
        } else {
            carDescText.innerHTML = localStorage.getItem("carDescription");
        }
    }
}

////////////////////////////////////////////////////

function changeDesc() {
    let changeDescButton = document.getElementById("change-desc");
    let saveDescButton = document.getElementById("save-desc");
    let carDesc = document.getElementById("car-desc");
    saveDescButton.style.display = "inline";
    changeDescButton.style.display = "none";
    carDesc.contentEditable = "true";
    carDesc.style.border = "1px solid white";
}

function saveDesc() {
    let changeDescButton = document.getElementById("change-desc");
    let saveDescButton = document.getElementById("save-desc");
    let carDesc = document.getElementById("car-desc");
    if (carDesc.innerHTML === "" || (carDesc.innerHTML.length) < 6) {
        carDesc.innerHTML = "Description can't be empty and it must be at least 6 characters long!";
    } else {
        saveDescButton.style.display = "none";
        changeDescButton.style.display = "inline";
        carDesc.contentEditable = "false";
        carDesc.style.border = "none";
    }
    localStorage.setItem("carDescription", carDesc.innerHTML);
}
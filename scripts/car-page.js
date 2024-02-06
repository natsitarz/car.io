///////////////////////////////////////////////////////////////////////////
window.onload = function() {
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
        return error;
    } else {
        saveDescButton.style.display = "none";
        changeDescButton.style.display = "inline";
        localStorage.setItem("carDescription", carDesc.innerHTML);
        console.log(localStorage.getItem("carDescription"));
        carDesc.contentEditable = "false";
        carDesc.style.border = "none";
    }
}
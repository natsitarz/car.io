///////////////////////////////////////////////////////////////////////////
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFeREYEgrVj2cCzj71sP8pIAN3PXL-gQ0",
    authDomain: "idmoto.firebaseapp.com",
    projectId: "idmoto",
    storageBucket: "idmoto.appspot.com",
    messagingSenderId: "462593287282",
    appId: "1:462593287282:web:1deb427333f34e50c34eeb",
    measurementId: "G-8KBMZ08B5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
window.onload = function() {
    if (localStorage.getItem("firstCar") === null) {
        document.getElementById("other-info").style.display = "none";
        document.getElementById("scroll-info").style.display = "none";
        document.getElementById("panel").style.display = "none";
        document.getElementById("gallery").style.display = "none";
        document.getElementById("panel").style.height = "0";
        document.getElementById("upload-photo-button").style.display = "none";
        document.getElementById("car-page").style.background = "0";
        document.title = "IDMOTO";
        let carManuModelText = document.getElementById("car-manumodel");
        carManuModelText.innerHTML = "No car added yet. <p style='font-size: 1.5rem; font-weight: lighter;'>Return to the home page and add new car.</p>";
    } else {
        document.getElementById("other-info").style.display = "flex";
        document.getElementById("scroll-info").style.display = "flex";
        document.getElementById("panel").style.display = "grid";
        document.getElementById("panel").display = "flex";
        document.getElementById("panel").style.height = "80%";
        document.getElementById("gallery").style.display = "flex";
        document.getElementById("car-page").style.backgroundImage = "url('" + localStorage.getItem("carPhoto") + "')";
        document.getElementById("upload-photo-button").style.display = "block";
        let carManuModelText = document.getElementById("car-manumodel");
        let carYearText = document.getElementById("car-year");
        let carEngineText = document.getElementById("car-engine");
        let carFuelText = document.getElementById("car-fuel");
        let carTransmissionText = document.getElementById("car-transm");
        let carDescText = document.getElementById("car-desc");
        let carOwner = document.getElementById("car-owner");
        document.title = `IDMOTO | ${JSON.parse(localStorage.getItem("firstCar")).manufacturer} ${JSON.parse(localStorage.getItem("firstCar")).model}`;
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
    document.getElementById('upload-photo').addEventListener('change', function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('car-page').style.backgroundImage = "url('" + e.target.result + "')";
            localStorage.setItem("carPhoto", e.target.result);
        };

        reader.readAsDataURL(file);
    });
    let logs = JSON.parse(localStorage.getItem("logs")) || {};
    Object.keys(logs).forEach(function(type) {
        console.log(logs);
        let logText = logs[`${type}`];
        let typ = type.replace(/[0-9]/g, '');
        let newLogEntry = document.createElement('div');
        newLogEntry.classList.add('log-entry');
        let logTextElement = document.createElement('p');
        if (typ === "log") {
            logTextElement.innerHTML = `${logText}`;
        } else if (typ === "fuel-consumption") {
            logTextElement.innerHTML = `${logText}`;
        } else {
            let newInputCheckbox = document.createElement('input');
            newInputCheckbox.type = "checkbox";
            logTextElement.innerHTML = `${logText}`;
            newLogEntry.appendChild(newInputCheckbox);
        }
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'remove';

        removeButton.addEventListener('click', function() {
            newLogEntry.remove();
            // Remove log from localStorage
            delete logs[`${type}`];
            console.log(`${type}`);
            localStorage.setItem("logs", JSON.stringify(logs));
        });
        newLogEntry.appendChild(logTextElement);
        newLogEntry.appendChild(removeButton);
        console.log(`${type}`);
        console.log(typ);
        document.querySelector(`.info-cards#${typ}`).appendChild(newLogEntry);
    });
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

function infoCards(type) {
    let logText = document.querySelector(`.${type} input `).value;
    if (logText === '') return;
    else {
        let newLogEntry = document.createElement('div');
        newLogEntry.classList.add('log-entry');
        let logTextElement = document.createElement('p');
        if (type === "log") {
            logTextElement.innerHTML = `<b> ${new Date(Date.now()).toLocaleString().split(',')[0] } </b> - ${logText}`;
        } else if (type === "fuel-consumption") {
            logTextElement.innerHTML = `<b>${new Date(Date.now()).toLocaleString().split(',')[0]}</b> - ${logText}l/100km`;
        } else {
            let newInputCheckbox = document.createElement('input');
            newInputCheckbox.type = "checkbox";
            logTextElement.innerHTML = `<b>${logText}</b>`;
            newLogEntry.appendChild(newInputCheckbox);
        }
        let rm = 0;
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'remove';
        let logs = JSON.parse(localStorage.getItem("logs")) || {};
        for (let i = 0; i < 100; i++) {
            if (logs[type + i] === undefined) {
                logs[type + i] = logTextElement.innerHTML;
                console.log(logs);
                localStorage.setItem("logs", JSON.stringify(logs));
                rm = i;
                break;
            }
        }
        removeButton.addEventListener('click', function() {
            logs = JSON.parse(localStorage.getItem("logs")) || {};
            newLogEntry.remove();
            delete logs[`${type}${rm}`];
            console.log([`${type}${rm}`])
            console.log(logs);
            localStorage.setItem("logs", JSON.stringify(logs));
        });
        newLogEntry.appendChild(logTextElement);
        newLogEntry.appendChild(removeButton);

        document.querySelector(`.info-cards#${type}`).appendChild(newLogEntry);

        logText = document.querySelector(`.${type} input `).value = '';

    }
}
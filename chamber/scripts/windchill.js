function calculateWindChill() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let windSpeed = parseFloat(document.getElementById('windSpeed').value);

    if (temp <= 50 && windSpeed > 3) {
        let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

        document.getElementById('result').textContent = "Wind Chill: " + windChill.toFixed(2) + "°F";
    } else {
        document.getElementById('result').textContent = "Wind Chill: N/A - Conditions not met";
    }

}
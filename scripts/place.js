
function calculateWindChill(temp, windSpeed) {
    
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}


const temperature = 45; 
const windSpeed = 5; 


document.addEventListener('DOMContentLoaded', function() {
    const windchillElement = document.getElementById('windchill');
    
   
    if (temperature <= 50 && windSpeed > 3) {
        const windchill = calculateWindChill(temperature, windSpeed);
        windchillElement.textContent = Math.round(windchill) + '°F';
    } else {
        windchillElement.textContent = 'N/A';
    }
    
    
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');
    
    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
});
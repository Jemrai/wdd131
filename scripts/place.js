// Function to calculate windchill
function calculateWindChill(temp, windSpeed) {
    // Formula for °F: 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

// Static values (matching displayed content)
const temperature = 45; // °F
const windSpeed = 5; // mph

// Display windchill on page load
document.addEventListener('DOMContentLoaded', function() {
    const windchillElement = document.getElementById('windchill');
    
    // Check conditions: temp <= 50°F and windSpeed > 3 mph
    if (temperature <= 50 && windSpeed > 3) {
        const windchill = calculateWindChill(temperature, windSpeed);
        windchillElement.textContent = Math.round(windchill) + '°F';
    } else {
        windchillElement.textContent = 'N/A';
    }
    
    // Footer: Current year and last modified
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');
    
    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
});
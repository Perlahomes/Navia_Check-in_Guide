// Centralized site data
const SITE_CONFIG = {
    mainHeading: "Welcome to Navia",
    mapLink: "https://maps.app.goo.gl/RdRXi2yVyh15BtbF7",
    touristLink: "https://messinia.mobi/el/article/katalumata/enoikiazomena-domatia/navia-enoikiazomena-diamerismata/10420",
    wifi: {
        network: "Comsote-692195",
        password: "03405347222880787661"
    },
    entranceCode: "2138",
    keyBoxCode: "2138"
};

// Populate HTML dynamically
window.addEventListener('DOMContentLoaded', () => {
    // Heading
    const heading = document.getElementById('main-heading');
    if (heading) heading.textContent = SITE_CONFIG.mainHeading;

    // Sidebar links
    const mapLinks = document.querySelectorAll('.map-link');
    mapLinks.forEach(a => a.href = SITE_CONFIG.mapLink);

    const touristLinks = document.querySelectorAll('.tourist-link');
    touristLinks.forEach(a => a.href = SITE_CONFIG.touristLink);

    // Wi-Fi info
    const wifiNetworkEls = document.querySelectorAll('#wifiNetwork');
    wifiNetworkEls.forEach(el => el.textContent = SITE_CONFIG.wifi.network);

    const wifiPasswordEls = document.querySelectorAll('#wifiPassword');
    wifiPasswordEls.forEach(el => el.textContent = SITE_CONFIG.wifi.password);

    // Entrance / Key Box code
    const entranceEls = document.querySelectorAll('#entranceCode');
    entranceEls.forEach(el => el.textContent = SITE_CONFIG.entranceCode);

    const keyBoxEls = document.querySelectorAll('#keyBoxCode');
    keyBoxEls.forEach(el => el.textContent = SITE_CONFIG.keyBoxCode);
});

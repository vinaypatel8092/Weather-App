const input = document.getElementById("city-input");
const button = document.getElementById("search-button");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f7f279658a29457bb91174848242501&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerHTML = `<i class="ri-map-pin-line"></i> ${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerHTML = `<i class="ri-map-pin-time-line"></i> ${result.location.localtime}`;
    cityTemp.innerHTML = `<i class="ri-temp-hot-line"></i> ${result.current.temp_c}<i class="ri-celsius-line"></i>`;
});
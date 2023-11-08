 function attachEvents() {
  const getWeatherButton = document.getElementById("submit");
  const locationInput = document.getElementById("location");
  const url = "http://localhost:3030/jsonstore/forecaster/locations";
  const forecastMain = document.getElementById("forecast");
  const currentForecastDiv = document.getElementById("current");
  const upcomingForecastDiv = document.getElementById("upcoming");

  const weatherSymbols = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };

  getWeatherButton.addEventListener("click", async () => {
    const input = locationInput.value;
    try {
      const locations =  getInfo(url);
      const { code } = locations.find((el) => el.name === input);
      const currectCondition =  getInfo(
        `http://localhost:3030/jsonstore/forecaster/today/${code}`
      );
      const threeDayForecast =  getInfo(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
      );

      //html creation
      forecastMain.style.display = "block";
      currentForecastDiv.appendChild(createForecastDiv(currectCondition));
      upcomingForecastDiv.appendChild(createForecastDiv(threeDayForecast));
    } catch (error) {
      forecastMain.style.display = "block";
      forecastMain.textContent = "Error";
    }
  });

  async function getInfo(url) {
    const info =  fetch(url);
    const data = info.json();
    return data;
  }

  function createForecastDiv(forecastObj) {
    const { name, forecast } = forecastObj;
    if (Array.isArray(forecast)) {
      const forecastsDiv = createHTML("div", "forecast-info");

      forecast.forEach((day) => {
        const { low, high, condition } = day;
        const upcomingSpan = createHTML("span", "upcoming");
        const conditionSymbolSpan = createHTML(
          "span",
          "symbol",
          weatherSymbols[condition]
        );
        const span2 = createHTML(
          "span",
          "forecast-data",
          `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`
        );
        const span3 = createHTML("span", "forecast-data", "", condition);
        upcomingSpan.appendChild(conditionSymbolSpan);
        upcomingSpan.appendChild(span2);
        upcomingSpan.appendChild(span3);
        forecastsDiv.appendChild(upcomingSpan);
      });
      return forecastsDiv;
    }
    const { low, high, condition } = forecast;
    const forecastsDiv = createHTML("div", "forecasts");
    const conditionSymbolSpan = createHTML(
      "span",
      "condition symbol",
      weatherSymbols[condition]
    );
    const conditionSpan = createHTML("span", "condition");
    const span1 = createHTML("span", "forecast-data", name);
    const span2 = createHTML(
      "span",
      "forecast-data",
      `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`
    );
    const span3 = createHTML("span", "forecast-data", condition);
    conditionSpan.appendChild(span1);
    conditionSpan.appendChild(span2);
    conditionSpan.appendChild(span3);
    forecastsDiv.appendChild(conditionSymbolSpan);
    forecastsDiv.appendChild(conditionSpan);

    return forecastsDiv;
  }

  function createHTML(type, htmlClass, innerHTML, text) {
    const myElement = document.createElement(type);

    if (htmlClass) {
      const classes = htmlClass.split(" ");
      classes.forEach((el) => {
        myElement.classList.add(el);
      });
    }
    innerHTML ? (myElement.innerHTML = innerHTML) : "";
    text ? (myElement.textContent = text) : "";

    return myElement;
  }
}

attachEvents();

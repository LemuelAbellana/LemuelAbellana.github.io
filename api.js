// Wait for the DOM to fully load before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {

    window.onscroll = function () {
      const elements = document.querySelectorAll('.scroll-element');
      
      if (elements) {
        elements.forEach(function (element) {
          if (element) {
            element.classList.add('scrolled');
          }
        });
      }
    };
  
    // Fetch dog image button click handler
    const apiButton = document.getElementById("apiButton");
    const apiOutput = document.getElementById("apiOutput");
  
    if (apiButton && apiOutput) {
      apiButton.addEventListener("click", async function () {
        apiButton.innerText = "Loading...";
  
        try {
          // Fetch data from the Dog API
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await response.json();
  
          if (response.ok) {
            apiOutput.innerHTML = `
              <img src="${data.message}" alt="Random Dog" style="max-width: 100%; border-radius: 10px;">
            `;
          } else {
            apiOutput.innerHTML = `<p>Error fetching image: ${data.message}</p>`;
          }
        } catch (error) {
          apiOutput.innerHTML = `<p>Error: ${error.message}</p>`;
        } finally {
          apiButton.innerText = "Fetch API Data";
        }
      });
    }
  });
  
// Javascript example file
// -----------------------
import { DynamicData } from './dynamicMenuDataApi';

export function dynamicMenuExample() {
  // Resets the root menu
  function resetMenu(root) {
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
  }

  // Generates HTML for menu and submenus using country & city data from an external API
  function generateHtml(data) {
    const initialMenu = document.querySelector('#initMenu');

    resetMenu(initialMenu);

    for (let index = 0; index < data.length; index++) {
      let country = data[index]['country'];
      let cities = data[index]['cities'];

      generateMenuOptionHtml(initialMenu, country, country);

      for (let indexB = 0; indexB < cities.length; indexB++) {
        let subMenu = document.createElement('auro-menu');

        generateMenuOptionHtml(subMenu, cities[indexB], cities[indexB]);

        initialMenu.appendChild(subMenu);
      }
    };
  }

  // Helper function that generates HTML for menuoptions
  function generateMenuOptionHtml(menu, label, value) {
    let option = document.createElement('auro-menuoption');

    option.value = value;
    option.innerHTML = label;

    menu.appendChild(option);
  }

  // Main javascript that runs all JS to create example
  const dynamicData = new DynamicData();
  const dynamicMenuExample = document.querySelector('#dynamicMenuExample');
  const dropdownEl = dynamicMenuExample.shadowRoot.querySelector(dynamicMenuExample.dropdownTag._$litStatic$);
  const inputEl = dropdownEl.querySelector(dynamicMenuExample.inputTag._$litStatic$);

  inputEl.addEventListener('input', () => {
    let data = dynamicData.getData();
    data = dynamicData.filterData(data, dynamicMenuExample.value);

    generateHtml(data);
  });
}

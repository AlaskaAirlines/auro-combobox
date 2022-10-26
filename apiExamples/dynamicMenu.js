import { DynamicData } from './dynamicMenuDataApi';

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

// Main function that runs all JS to create example
export async function populateCombobox(elem) {
    const dynamicData = new DynamicData();

    let data = await dynamicData.getData();
    data = dynamicData.filterData(data, elem.value);

    generateHtml(data);
}
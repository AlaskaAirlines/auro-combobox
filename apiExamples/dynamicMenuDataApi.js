class DynamicData {
  getData() {
    const response = [
      {iso2: 'AR', iso3: 'ARG', country: 'Argentina', cities: ['Germania']},
      {iso2: 'CA', iso3: 'CAN', country: 'Canada', cities: ['Saint-Germain-de-Grantham']},
      {iso2: 'FR', iso3: 'FRA', country: 'France', cities: ['Chatel-Saint-Germain', 'Domgermain', 'Germaine', 'Germainville', 'Germenay']},
      {iso2: 'DE', iso3: 'DEU', country: 'Germany', cities: ['Algermissen', 'Angermunde', 'Germering', 'Hilgermissen', 'Tangermunde']},
      {iso2: 'IR', iso3: 'IRN', country: 'Iran', cities: ['Germi']}
    ];

    return response;
  }

  filterData(data, value) {
    const filteredData = [];

    for (let index = 0; index < data.length; index ++) {
      let countryName = data[index]['country'].toLowerCase();

      if (value) {
        data[index]['cities'] = data[index]['cities'].filter(city => city.toLowerCase().includes(value.toLowerCase()));

        if (countryName.includes(value.toLowerCase()) || data[index]['cities'].length > 0) {
          filteredData.push(data[index]);
        }
      }
    };

    return filteredData;
  }
}

export { DynamicData }

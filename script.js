const priceListContainer = document.getElementById('priceListContainer');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const priceList = data.priceList;

    // Create an unordered list for each category
    Object.keys(priceList).forEach(category => {
      const categoryList = document.createElement('ul');
      const categoryData = priceList[category];

      // Add list items for each service within the category
      Object.keys(categoryData).forEach(service => {
        const serviceData = categoryData[service];

        const listItem = document.createElement('li');
        listItem.textContent = `${serviceData.name}: ${serviceData.price}`;

        categoryList.appendChild(listItem);
      });

      // Add the category list to the price list container
      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category.toUpperCase();
      priceListContainer.appendChild(categoryTitle);
      priceListContainer.appendChild(categoryList);
    });
  })
  .catch(error => {
    console.error('Error fetching price list:', error);
  });

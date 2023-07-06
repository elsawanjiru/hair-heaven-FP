const priceListContainer = document.getElementById('priceListContainer');

fetch('pricelist.json')
  .then(response => response.json())
  .then(data => {
    const priceList = data.priceList;

    // Iterate over each category in the price list data
    Object.keys(priceList).forEach(category => {
      // Create a category title element
      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category;

      // Create a list for the category
      const categoryList = document.createElement('ul');

      // Iterate over each service in the category
      Object.keys(priceList[category]).forEach(service => {
        // Get the price for the service
        const price = priceList[category][service];

        // Create a list item with the service and price
        const listItem = document.createElement('li');
        listItem.textContent = `${service}\t\t${price}`;

        // Append the list item to the category list
        categoryList.appendChild(listItem);
      });

      // Append the category title and list to the price list container
      priceListContainer.appendChild(categoryTitle);
      priceListContainer.appendChild(categoryList);
    });
  })
  .catch(error => {
    console.error('Error fetching price list:', error);
  });

//----------------------------- vacancies

  function submitForm() {
    const name = document.getElementById('nameInput').value;
    const address = document.getElementById('addressInput').value;
    const residence = document.getElementById('residenceInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;

    // Perform any necessary processing or validation with the form data
    // ...

    // Display an alert to indicate that the form is submitted
    alert('Form submitted!');
  }


  //---------------------------------contact------------------------//
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }

    return true;
}

const priceListContainer = document.getElementById('priceListContainer');

fetch('https://hair-heaven-json.onrender.com/pricelist')
  .then(response => response.json())
  .then(data => {
    const priceList = data;

    priceList.forEach(category => {
      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category.title;

      const categoryList = document.createElement('ul');

      Object.keys(category).forEach(key => {
        if (key !== 'id' && key !== 'title') {
          const listItem = document.createElement('li');
          listItem.textContent = `${key}\t\t${category[key]}`;
          categoryList.appendChild(listItem);
        }
      });

      priceListContainer.appendChild(categoryTitle);
      priceListContainer.appendChild(categoryList);
    });
  })
  .catch(error => {
    console.error('Error fetching price list:', error);
  });


//----------------------------- vacancies----------------------------------//

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
  //-----------------------productjs----------------------//
  function scrollToProductList() {
    const productList = document.getElementById("productList");
    productList.scrollIntoView({ behavior: "smooth" });
  }
  //--------------commentes-------------------------------------//



  //---------------------------------contact------------------------//
  function showSuccessMessage() {
    alert("Form submitted successfully!");
  }
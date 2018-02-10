// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateSearch = document.querySelector("#datetime");
var $citySearch = document.querySelector("#city");
var $stateSearch = document.querySelector("#state");
var $countrySearch = document.querySelector("#country");
var $shapeSearch = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");



// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to data initially
var filteredUFO = ufoData1;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    // Get get the current address object and its fields
    var UFO = filteredUFO[i];
    var fields = Object.keys(UFO);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = UFO[field];
    }
  }
}

  function handleSearchButtonClick() {
    // create a list of searches
    var searches ={
      // date: $dateSearch.value.trim().toLowerCase(), 
      // city: $citySearch.value.trim().toLowerCase(), 
      state: $stateSearch.value.trim().toLowerCase() 
      // country: $countrySearch.value.trim().toLowerCase(), 
      // shape: $shapeSearch.value.trim().toLowerCase()
    };
    console.log(searches);
   
    // splice out empty seaches

    // iterate through list of searches and filter desired data
    var searchParameter = Object.keys(searches);
    var searchFilter = Object.values(searches);
    console.log(searchParameter); //needs to be an object not a string
    console.log(searchFilter); 
    console.log(filteredUFO);
    filteredUFO = filteredUFO.filter(xs => xs.searchParameter === searchFilter);
    console.log(filteredUFO);
    renderTable();
  }

  // function handleSearchButtonClick() {
  //   // create a list of searches
  //   var searches ={
  //     dateTime: $dateSearch.value, 
  //     city: $citySearch.value.trim().toLowerCase(), 
  //     state: $stateSearch.value.trim().toLowerCase(), 
  //     country: $countrySearch.value.trim().toLowerCase(), 
  //     shape: $shapeSearch.value.trim().toLowerCase()
  //   }
  //   console.log(searches);
  //   console.log(Object.keys(searches));
  //   console.log(Object.values(searches));

  //   // iterate through list of searches and filter desired data
  //   for (i = 0; i < searches.length; i++) { 
  //     if (object.values(i) !="")
  //       var searchParameter = Object.keys(i)
  //       var searchFilter = Object.values(i)
  //       filteredUFO = filteredUFO.filter(x => x.searchParameter === searchFilter);
  //       console.log(filteredUFO)
  //   }
  //   renderTable();
  // }

// Render the table for the first time on page load
renderTable();



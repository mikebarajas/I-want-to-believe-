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

// function handleSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
  
//   var filterUFO = $countrySearch.value.trim().toLowerCase();
//   var filterUFO = $stateSearch.value.trim().toLowerCase();
//   console.log($stateSearch)
//   console.log($countrySearch)
//   console.log(filterUFO)
//   // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredUFO = ufoData1.filter(function(UFO) {
//     var ufoCountry = UFO.country.toLowerCase();
//     var ufoState = UFO.state.toLowerCase();

//     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//     return ufoCountry === filterUFO;
//     return ufoState === filterUFO;
//   });
//   renderTable();
// }

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  if ($dateSearch.length > 0) { 
            var search = $dateSearch
            var searchParameter = 'datetime';
          }
  else if ($citySearch.length > 0) { 
            var search = $citySearch
            var searchParameter = 'city';
          }
  else if ($stateSearch.length > 0) {
            var search = $stateSearch
            var searchParameter = 'state';
          }
  else if ($countrySearch.length > 0) { 
            var search = $countrySearch; 
            var searchParameter = 'country';
          }
  else if ($shapeSearch.length > 0) { 
            var search = $shapeSearch 
            var searchParameter = 'shape';
          }

  console.log('Search: ', search)
  console.log('Search Parameter: ',searchParameter)

  // var filterUFO = search.value.trim().toLowerCase();

  // // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  // filteredUFO = ufoData1.filter(function(UFO) {
  //   var ufoState = UFO.searchParameter.toLowerCase();
  //   console.log('filteredUFO: ',filteredUFO)
  //   console.log('ufoState: ',ufoState)
  //   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
  //   return ufoState === filterUFO;
  // });
  // renderTable();
}

// Render the table for the first time on page load
renderTable();

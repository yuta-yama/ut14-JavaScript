// from data.js
var tableData = data;

// variables
var tbody = d3.select("tbody")
var filterBtn = d3.select("#filter-btn")

// populate table
data.forEach(function(data) {
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]) {
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    })
});

// "Filter Table" button click
filterBtn.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    // filter by date matching input value
    var filterData = tableData.filter(data => data.datetime === inputValue);

    // add filtered sighting to table
    filterData.forEach(data => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(function([key, value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        })
    });
})





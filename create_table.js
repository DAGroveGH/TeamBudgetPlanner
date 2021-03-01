var myData = [
    {"DealId" : 0, "Client" : "Microsoft", "Project Name" : "Apollo Project", "Project Manager" : "Mary", "Cost" : 1000},
    {"DealId" : 1, "Client" : "Intel", "Project Name" : "Hermes Project", "Project Manager" : "Bob", "Cost" : 10000},
    {"DealId" : 2, "Client" : "Apple", "Project Name" : "Zeus Project", "Project Manager" : "Jane", "Cost" : 100000}
]


var currentDealId = myData.length;

localStorage.setItem("myData", "test")

var myDataTest = localStorage.getItem("myData")

function CreateTableFromJSON() {    
    var col = [];
    for (var i = 0; i < myData.length; i++) {
        for (var key in myData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myData.length; i++) {

        tr = table.insertRow(-1);
        tr.contentEditable = "true"
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myData[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

    var totalCost=document.createElement("p");
    var sum=0
    for(var i = 0; i<myData.length;i++) {
        sum+=Number(myData[i].Cost);
        console.log(sum);
    }
    totalCost.innerHTML = sum;

    var totalContainer=document.getElementById("total");
    totalContainer.innerHTML="";
    totalContainer.appendChild(totalCost);
}

function AddNewDeal() {
    var clientName = document.getElementById("clientNameInput").value;
    var projectName = document.getElementById("projectNameInput").value;
    var projectManager = document.getElementById("projectManagerInput").value;
    var projectCost = document.getElementById("projectCostInput").value;

    document.getElementById("clientNameInput").value = "";
    document.getElementById("projectNameInput").value = "";
    document.getElementById("projectManagerInput").value = "";
    document.getElementById("projectCostInput").value = "";

    InsertRow(currentDealId, clientName, projectName, projectManager, projectCost);
}

function InsertRow(dealId, clientName, projectName, projectManager, projectCost) {
    myData.push({"DealId": dealId, "Client" : clientName, "Project Name" : projectName, "Project Manager" : projectManager, "Cost" : projectCost})
    currentDealId++;
    CreateTableFromJSON();
}

function DeleteRow() {
    var deleteId = document.getElementById("deleteId").value;
    deleteId=Number(deleteId);
    console.log(deleteId);
    for( var i = 0; i < myData.length; i++){ 
        console.log(myData[i].DealId, deleteId);
        console.log(typeof myData[i].DealId, typeof deleteId);
        if ( myData[i].DealId === deleteId) { 
            console.log("true")
            myData.splice(i, 1); 
        }
        console.log("false")
    }
    CreateTableFromJSON();
}

function Budget() {
    var totalCost=0;
    for(i = 0; i<myData.length;i++) {
        totalCost+=Number(myData[i].Cost);
    }
    console.log(totalCost);
    document.createElement("p").innerHTML(totalCost);
}

function submit() {
    var budget=document.getElementById("budgetSubmit").value;
    console.log(budget);

    var newBudget=document.createElement("p");
    newBudget.innerHTML = budget

    var budgetContainer = document.getElementById("budget");
    budgetContainer.innerHTML = "";
    budgetContainer.appendChild(newBudget);
    

}
const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}

// Sales Chart

const sales =
document.getElementById("salesChart");

if(sales){

new Chart(sales,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[{

label:"Revenue",

data:[
12000,
19000,
15000,
25000,
30000,
42000
],

borderWidth:3

}]

}

});

}

// Inventory Chart

const inventory =
document.getElementById("inventoryChart");

if(inventory){

new Chart(inventory,{

type:"doughnut",

data:{

labels:[
"Electronics",
"Accessories",
"Furniture"
],

datasets:[{

data:[
55,
25,
20
]

}]

}

});

}
const search =
document.getElementById("productSearch");

if(search){

search.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let rows =
document.querySelectorAll("#productTable tr");

rows.forEach(row=>{

row.style.display =
row.innerText.toLowerCase()
.includes(value)
? ""
: "none";

});

});

}const supplierSearch =
document.getElementById("supplierSearch");

if(supplierSearch){

supplierSearch.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".supplier-card");

cards.forEach(card=>{

card.style.display =
card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});

}
// Revenue Chart

const revenueChart =
document.getElementById("revenueChart");

if(revenueChart){

new Chart(revenueChart,{

type:"bar",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[{

label:"Revenue",

data:[
50000,
70000,
85000,
100000,
125000,
150000
]

}]

}

});

}

// Sales Distribution

const salesPieChart =
document.getElementById("salesPieChart");

if(salesPieChart){

new Chart(salesPieChart,{

type:"pie",

data:{

labels:[
"Electronics",
"Accessories",
"Furniture"
],

datasets:[{

data:[
55,
30,
15
]

}]

}

});

}

// Inventory Trends

const inventoryTrendChart =
document.getElementById("inventoryTrendChart");

if(inventoryTrendChart){

new Chart(inventoryTrendChart,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[{

label:"Stock Movement",

data:[
120,
150,
180,
160,
210,
250
],

fill:false

}]

}

});

}
// Dark Mode Toggle

const darkModeToggle =
document.getElementById("darkModeToggle");

if(darkModeToggle){

darkModeToggle.addEventListener("change",()=>{

document.body.classList.toggle("dark-mode");

});

}
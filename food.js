api_key = "gapl5hqzHpw9MBTjRondI0pbdFRSOjgew7iuPJmQ";
var searchForm = document.getElementById("foodsearch");
var fooddisplayelement = document.getElementById("food-display");

function foodItem (food){
  var foodQuery = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=gapl5hqzHpw9MBTjRondI0pbdFRSOjgew7iuPJmQ&query=${food}`;
  fetch (foodQuery)

    .then (function(res){
        return res.json()
        
    })  
    .then (function (data){
        console.log(data.foods)
        for (let i = 0; i < 6; i ++){
            var cardele = document.createElement("div")
            var descele = document.createElement("p")
            var catele = document.createElement("p")
            var ingele = document.createElement("p")
            descele.textContent = data.foods[i].description
            catele.textContent = data.foods[i].foodCategory
            ingele.textContent = data.foods[i].ingredients
            cardele.append(descele)
            cardele.append(catele)
            cardele.append(ingele)
            cardele.setAttribute("class", "food-display-card")
            fooddisplayelement.append(cardele)
        }
    }) 
}

searchForm.addEventListener("submit", 

function (event) {
    event.preventDefault() ;
    var food = document.getElementById("food").value;
    console.log(food)
    foodItem(food)
})
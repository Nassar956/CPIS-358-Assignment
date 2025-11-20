
const allergenDatabase = {
    "milk": ["milk", "lactose", "whey", "casein", "butter", "cream", "yogurt", "curd"],
    "peanuts": ["peanut", "arachis", "goober", "mandelona", "nut"],
    "eggs": ["egg", "albumin", "globulin", "lecithin", "mayonnaise", "ovalbumin"],
    "gluten": ["wheat", "barley", "rye", "malt", "flour", "semolina", "starch"],
    "soy": ["soy", "tofu", "edamame", "miso", "tempeh", "bean"]
};

function scanProduct() {

    const allergyKey = document.getElementById('allergySelect').value;


    if (allergyKey === "") {
        alert("Please select an allergy profile first!");
        return;
    }


    let ingredientsText = document.getElementById("ingredientInput").value.toLowerCase();

    if (ingredientsText.trim() === "") {
        alert("Please paste the ingredients list.");
        return;
    }


    let foundRisks = [];


    let hiddenNames = allergenDatabase[allergyKey];


    hiddenNames.forEach((hiddenName) => {
        if (ingredientsText.includes(hiddenName)) {

            foundRisks.push(`${hiddenName} (related to ${allergyKey})`);
        }
    });


    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";

    if (foundRisks.length > 0) {

        resultBox.className = "risky";

        let uniqueRisks = [...new Set(foundRisks)];

        resultBox.innerHTML = `
            ⚠️ <strong>RISKY!</strong> Contains allergens:<br>
            ${uniqueRisks.join(", ")}
        `;
    } else {

        resultBox.className = "safe";
        resultBox.innerHTML = "✅ <strong>SAFE!</strong> No selected allergens detected.";
    }
}
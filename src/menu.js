function displayMenu() {
    const menu = document.getElementById("menuBtn");
    menu.addEventListener("click", function() {
        const descript = document.querySelector(".description")
        const container = document.querySelector(".container");
        descript.remove();

        const menuContainer = document.createElement("div");
        menuContainer.classList = "description";
        container.appendChild(menuContainer)

        const menuItems = document.createElement("div");
        menuItems.classList = "menuItems";
        menuItems.textContent = "Enjoy some of our specialty items that include:";
        menuContainer.appendChild(menuItems);

        const pizzaContainer = document.createElement("div");
        pizzaContainer.classList = "pizzaContainer";
        const pizzaImg = document.createElement("img");
        pizzaImg.setAttribute("src", "img/pizza.jpg");
        pizzaImg.id = "pizzaImg"
        const pizzaText = document.createElement("p");
        pizzaText.id = "pizzaText";
        pizzaText.textContent = "Fountain Dining Hall Monstrosity";
        pizzaContainer.appendChild(pizzaText);
        pizzaContainer.appendChild(pizzaImg);
        menuContainer.appendChild(pizzaContainer)

        const thingContainer = document.createElement("div");
        thingContainer.classList = "thingContainer";
        const thingText = document.createElement("p");
        thingText.id = "thingText";
        thingText.textContent = "What the Fuck"
        const thingImg = document.createElement("img");
        thingImg.id = "thingImg";
        thingImg.setAttribute("src", "img/thing.jpg");
        thingContainer.appendChild(thingText);
        thingContainer.appendChild(thingImg)
        menuContainer.appendChild(thingContainer);

        const bananaContainer = document.createElement("div");
        bananaContainer.classList = "bananaContainer";
        const bananaText = document.createElement("p");
        bananaText.id = "bananaText";
        bananaText.textContent = "Uncrusted Banana";
        const bananaImg = document.createElement("img");
        bananaImg.id = "bananaImg";
        bananaImg.setAttribute("src", "img/banana.jpg");
        bananaContainer.appendChild(bananaText);
        bananaContainer.appendChild(bananaImg);
        menuContainer.appendChild(bananaContainer);
    })
}

export default displayMenu
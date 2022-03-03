function homepage() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList = "container";
    content.appendChild(container)
    
    const header = document.createElement("div");
    header.classList = "header";
    container.appendChild(header);

    const headerDining = document.createElement("h1");
    const headerFountain = document.createElement("h1");
    headerDining.id = "ncstateLogo";
    headerFountain.id = "headerFountain"
    headerDining.textContent = "NC State";
    headerFountain.textContent = "Fountain Dining Hall";
    header.appendChild(headerDining);
    header.appendChild(headerFountain)

    const homeBtn = document.createElement("div");
    homeBtn.id = "homeBtn";
    homeBtn.textContent = "Home";
    header.appendChild(homeBtn);

    const menuBtn = document.createElement("div");
    menuBtn.id = "menuBtn";
    menuBtn.textContent = "menu";
    header.appendChild(menuBtn);

    const contactBtn = document.createElement("div");
    contactBtn.id = "contactBtn";
    contactBtn.textContent = "contact";
    header.appendChild(contactBtn);

    const background = document.createElement("div");
    background.classList = "background";
    container.appendChild(background);

    const homeImg = document.createElement("img");
    homeImg.id = "happyCustomers";
    homeImg.setAttribute("src", "img/happycustomers.png");
    background.appendChild(homeImg);

    const description = document.createElement("div");
    description.classList = "description";
    container.appendChild(description)
    const summaryFountain = document.createElement("h3");
    const persuade = document.createElement("p");
    persuade.id = "persuade";
    const reviewOne = document.createElement("p");
    const reviewTwo = document.createElement("p");
    const reviewThree = document.createElement("p");
    const reviewContainer = document.createElement("div");
    const reviewsBox = document.createElement("div");
    reviewsBox.classList = "reviewsBox";
    reviewContainer.classList = "reviewContainer";
    reviewContainer.appendChild(persuade)
    reviewsBox.appendChild(reviewOne)
    reviewsBox.appendChild(reviewTwo)
    reviewsBox.appendChild(reviewThree)
    reviewContainer.appendChild(reviewsBox)
    reviewOne.classList = "redditReview"
    reviewTwo.classList = "redditReview"
    reviewThree.classList = "redditReview"
    summaryFountain.textContent = "An all-you-care-to-eat dining hall serving breakfast, lunch and dinner. Choose from an extensive selection of daily entrees and sides, plus a salad bar, deli/wrap station, hot grill station, fresh fruit and dessert bar featuring Howling Cow Ice Cream."
    persuade.textContent = "Don't believe us? Check out these great reviews:"
    reviewOne.textContent = `"Eat at fountain you'll shit a mountain" -isvavi07`
    reviewTwo.textContent = `"How do they just keep getting worse? They're gonna get sued if they keep this up." -Stupot97`
    reviewThree.textContent = `"And they charge 12 bucks lol" - articlesarestupid`
    description.appendChild(summaryFountain);
    description.appendChild(reviewContainer);
    
    homeBtn.addEventListener("click", function() {
        description.remove();
        const description = document.createElement("div");
    description.classList = "description";
    container.appendChild(description)
    const summaryFountain = document.createElement("h3");
    const persuade = document.createElement("p");
    persuade.id = "persuade";
    const reviewOne = document.createElement("p");
    const reviewTwo = document.createElement("p");
    const reviewThree = document.createElement("p");
    const reviewContainer = document.createElement("div");
    const reviewsBox = document.createElement("div");
    reviewsBox.classList = "reviewsBox";
    reviewContainer.classList = "reviewContainer";
    reviewContainer.appendChild(persuade)
    reviewsBox.appendChild(reviewOne)
    reviewsBox.appendChild(reviewTwo)
    reviewsBox.appendChild(reviewThree)
    reviewContainer.appendChild(reviewsBox)
    reviewOne.classList = "redditReview"
    reviewTwo.classList = "redditReview"
    reviewThree.classList = "redditReview"
    summaryFountain.textContent = "An all-you-care-to-eat dining hall serving breakfast, lunch and dinner. Choose from an extensive selection of daily entrees and sides, plus a salad bar, deli/wrap station, hot grill station, fresh fruit and dessert bar featuring Howling Cow Ice Cream."
    persuade.textContent = "Don't believe us? Check out these great reviews:"
    reviewOne.textContent = `"Eat at fountain you'll shit a mountain" -isvavi07`
    reviewTwo.textContent = `"How do they just keep getting worse? They're gonna get sued if they keep this up." -Stupot97`
    reviewThree.textContent = `"And they charge 12 bucks lol" - articlesarestupid`
    description.appendChild(summaryFountain);
    description.appendChild(reviewContainer);
    })
}

export default homepage

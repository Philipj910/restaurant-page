function homeBtn() {
    const homeTab = document.getElementById("homeBtn")
    homeTab.addEventListener("click", function() {
        const descrip = document.querySelector(".description")
        descrip.remove();
        const container = document.querySelector(".container")
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
};

export default homeBtn
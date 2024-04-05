// script.js

document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");

    // Sample data for cards
    const cardsData = [
        { title: "Card 1", content: "This is the content of Card 1." },
        { title: "Card 2", content: "This is the content of Card 2." },
        { title: "Card 3", content: "This is the content of Card 3." }
    ];

    // Function to create a card element
    function createCard(title, content) {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = title;

        const cardContent = document.createElement("p");
        cardContent.textContent = content;

        card.appendChild(cardTitle);
        card.appendChild(cardContent);

        return card;
    }

    // Function to render cards
    function renderCards() {
        cardsData.forEach(cardData => {
            const card = createCard(cardData.title, cardData.content);
            cardContainer.appendChild(card);
        });
    }

    // Render the initial set of cards
    renderCards();
});

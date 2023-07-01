function toggleImageSize() {
    var image = document.getElementById("galileo-image");
    if (image.style.width === "100%") {
        image.style.width = "auto";
    } else {
        image.style.width = "100%";
    }
}

var quotes = [
    "I have never met a man so ignorant that I couldn't learn something from him.",
    "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.",
    "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
    "I have never met a man so ignorant that I couldn't learn something from him."
];

function showRandomQuote() {
    var quoteText = document.getElementById("quote-text");
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
}

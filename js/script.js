
const containerElement = document.querySelector("div.container")

for (let i = 1; i <= 100; i++) {

    const cardElement = document.createElement("div")
    cardElement.className = "card"

    const headingCardElement = document.createElement('h2');
    headingCardElement.innerHTML = i;

    cardElement.appendChild(headingCardElement);
    containerElement.appendChild(cardElement);

    if (i % 15 == 0) {
        headingCardElement.innerHTML = "FizzBuzz"
        cardElement.style.color="red"
    }
    else if (i % 3 == 0) {
        headingCardElement.innerHTML = "Fizz"
        cardElement.style.color="goldenrod"
    }

    else if (i % 5 == 0) {
        headingCardElement.innerHTML = "Buzz"
        cardElement.style.color="green"
    }

}
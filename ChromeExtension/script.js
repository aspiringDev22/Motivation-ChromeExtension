const text = document.getElementById("quote");
const author = document.getElementById("author");

async function getNewQuote() {
  var url = "https://type.fit/api/quotes";

  const response = await fetch(url);
  const allQuote = await response.json();

  const indx = Math.floor(Math.random() * allQuote.length);

  const quote = allQuote[indx].text;
  const auth = allQuote[indx].author;

  if (auth == null) {
    author = "Anonymous";
  }

  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
}

window.onload = getNewQuote;

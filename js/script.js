const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const quotes = [
// ... Change or add new quotes here ...
"Y como no bebo, me lo unto.",
"Si la calle está dura, suba a la acera.",
"Cuando la yuca es grande, la tierra se abre.",
"La barriga que muchos de ustedes tienen no es producto de comer pendejadas, se están alimentando bien.",
"Estoy contento con mi carguito.",
"Estas manos no se van a manchar con el oro corruptor.",
"Si la calle está dura, suba a la acera.",
"A veces cuando hablan baba hay que decirles babosos, porque esa es la palabra gramatical que se ajusta.",
"Muy bien tumba polvo, muy bien tumba polvo.",
"Es cobarde como una gallina.",
"Miguel Vargas no le gana a nadie, a Chochueca. Es un pichón de dictador.",
"El PRD no existe. Eso no está en la mente de las personas.",
"No tenga miedo pariente.",
"En el  gobierno lo único que ha cambiado es que Leonel Fernandez era arrogante y Danilo Medina es sencillo.",
"El problema del dengue se resuelve con que cada dominicano mate un mosquito diario.",
"Ocho de cada diez dominicanos son corruptos.",
"Calderón, ¿'onde ta la página, ahora no la jayo? ¿Cómo es que seguía el discurso?.",
"Una persona que se atreva a estar diciendo todos los días una serie de disparates, lo mínimo que debe ser es un baboso…",
"La gente quiere que uno cambie, que asuma posiciones de mariconcito. ¿Por qué coño? No. Yo no creo en eso. ¿Por qué yo no puedo decir “coño”? Yo soy un ser humano.",
"Reina (a Sofía de España), ven a bailar; Rosa, saca tú al rey.",
"Me voy a echar una vaina.",
"Normalmente no hago liga con los traicioneros (Miguel Vargas Maldonado). A los traicioneros yo les doy tratamiento de traicionero y él es un traicionero.",
"Pregúntales si es verdad que les gustan los hombres.",
"Habría que chequear a todos los pájaros que hay en el Palacio Nacional.",
"(Leonel Fernandez) es el presidente más jablador y mentiroso que yo he conocido, él se siente bien hablando embuste.",
"Vincho y una basura es lo mismo, pero si él no sirve los hijos sirven menos."

];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function getQuote() {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);
    setTweetButton(randomQuote);
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

const twitterButton = document.querySelector('#js-tweet');

function setTweetButton(quote) {
    const tweetText = encodeURIComponent(quote);
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${tweetText}`);
}

getQuote();
import quotes from "./quotes";

function randomPrettyColor() {
  const hue = Math.floor(Math.random() * 256);
  return `hsl(${hue}, 93%, 84%)`;
}

function setBodyStyle() {
  const body = document.querySelector("body");

  if (body) {
    body.style.background = `linear-gradient(${randomPrettyColor()}, ${randomPrettyColor()}`;
  }
}

function App() {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  setBodyStyle();

  return (
    <>
      <main>
        <p className="quote">{quote.text}</p>
        <p className="link">
          <a href={quote.source}>#</a>
        </p>
      </main>
    </>
  );
}

export default App;

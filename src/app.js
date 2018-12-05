class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    this.changeQuote();
  }

  changeQuote() {
    const COLORS = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
      "#bfef45",
      "#42d4f4",
      "#000",
      "#ffd8b1",
      "#aaffc3"
    ];

    const color = Math.floor(Math.random() * COLORS.length + 1);

    document.body.style.backgroundColor = COLORS[color];

    document.querySelector("html").style.color = COLORS[color];

    document.getElementById("new-quote").style.backgroundColor = COLORS[color];

    document.getElementById("tweet-quote-button").style.backgroundColor =
      COLORS[color];

    fetch("https://talaikis.com/api/quotes/random/")
      .then(results => results.json())
      .then(data =>
        this.setState({
          quote: data.quote,
          author: data.author
        })
      );
  }

  render() {
    return (
      <div>
        <div id="quote-box">
          <h3 id="text">
            <i class="fa fa-quote-left" /> {this.state.quote}
          </h3>
          <p id="author">- {this.state.author}</p>
          <div id="buttons">
            <button id="new-quote" onClick={this.changeQuote}>
              New Quote
            </button>
            <button id="tweet-quote-button">
              <a
                id="tweet-quote"
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  this.state.quote +
                  " - " +
                  this.state.author
                }
                target="_blank"
              >
                <i id="twitter-icon" class="fab fa-twitter" />
              </a>
            </button>
          </div>
        </div>
        <div id="footer">
          by<a href="https://tsmarques.com"> TSMarques</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

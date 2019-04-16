class App extends React.Component {
  state = {
    quote: '',
    author: '',
    randomColor: ''
  };

  componentDidMount = () => {
    this.changeQuote();
  };

  changeQuote = () => {
    const COLORS = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
      '#bfef45',
      '#42d4f4',
      '#000',
      '#ffd8b1',
      '#aaffc3'
    ];

    const randomColor = Math.floor(Math.random() * COLORS.length + 1);

    this.setState({
      randomColor: COLORS[randomColor]
    });

    setTimeout(() => {
      fetch(
        'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1',
        {
          headers: {
            'X-RapidAPI-Key':
              'd1d3dedbf5mshe1ec2d4379d51dbp168869jsn8c889a73a933'
          }
        }
      )
        .then(results => results.json())
        .then(data =>
          this.setState({
            quote: data[0].quote,
            author: data[0].author
          })
        );
    }, 500);

    document.querySelector('html').style.color = COLORS[randomColor];

    document
      .getElementById('text')
      .animate(
        [{ opacity: 1 }, { opacity: 0 }, { opacity: 0 }, { opacity: 1 }],
        2000
      );

    document
      .getElementById('author')
      .animate(
        [{ opacity: 1 }, { opacity: 0.01 }, { opacity: 0.01 }, { opacity: 1 }],
        2000
      );
  };

  render() {
    return (
      <div
        class='app-container'
        style={{ backgroundColor: this.state.randomColor }}>
        <div id='quote-box'>
          <h3 id='text'>
            <i class='fa fa-quote-left' /> {this.state.quote}
          </h3>
          <p id='author'>- {this.state.author}</p>
          <div id='buttons-container'>
            <button
              id='new-quote'
              onClick={this.changeQuote}
              style={{ backgroundColor: this.state.randomColor }}>
              New Quote
            </button>
            <button
              id='tweet-quote-button'
              style={{ backgroundColor: this.state.randomColor }}>
              <a
                id='tweet-quote'
                href={
                  'https://twitter.com/intent/tweet?text=' +
                  this.state.quote +
                  ' - ' +
                  this.state.author
                }
                target='_blank'>
                <i id='twitter-icon' class='fab fa-twitter' />
              </a>
            </button>
          </div>
        </div>
        <div id='footer'>
          by<a href='https://tsmarques.com'> TSMarques</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

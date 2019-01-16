class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    this.changeQuote();
  }

  // componentWillUpdate() {
  //   document
  //     .querySelector('html')
  //     .animate([{ opacity: 1 }, { opacity: 0.1 }], 100);
  // }

  // componentDidUpdate() {
  //   document
  //     .querySelector('html')
  //     .animate([{ opacity: 0.1 }, { opacity: 1 }], 500);
  // }

  changeQuote() {
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

    const color = Math.floor(Math.random() * COLORS.length + 1);

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

    document.body.style.backgroundColor = COLORS[color];

    document.querySelector('html').style.color = COLORS[color];

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

    document.getElementById('new-quote').style.backgroundColor = COLORS[color];

    document.getElementById('tweet-quote-button').style.backgroundColor =
      COLORS[color];
  }

  render() {
    return (
      <div>
        <div id='quote-box'>
          <h3 id='text'>
            <i class='fa fa-quote-left' /> {this.state.quote}
          </h3>
          <p id='author'>- {this.state.author}</p>
          <div id='buttons'>
            <button id='new-quote' onClick={this.changeQuote}>
              New Quote
            </button>
            <button id='tweet-quote-button'>
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

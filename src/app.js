import React, { Fragment } from 'react';
import './styles.css';
import styled from 'styled-components/macro';
import 'animate.css';
import { PulseLoader } from 'react-spinners';

class App extends React.Component {
  state = {
    quote: '',
    author: '',
    randomColor: '#16a085',
    isLoading: true
  };

  componentDidMount = async () => {
    await this.changeQuote();
    this.selectColor();
  };

  changeQuote = () => {
    this.setState({
      isLoading: true
    });
    fetch(
      'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1',
      {
        headers: {
          'X-RapidAPI-Key': 'd1d3dedbf5mshe1ec2d4379d51dbp168869jsn8c889a73a933'
        }
      }
    )
      .then(results => results.json())
      .then(data =>
        this.setState({
          quote: data[0].quote,
          author: data[0].author,
          isLoading: false
        })
      );
  };

  selectColor = () => {
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

    const randomIndex = Math.floor(Math.random() * COLORS.length);

    this.setState({
      randomColor: COLORS[randomIndex]
    });
  };

  handleClick = async () => {
    await this.changeQuote();
    this.selectColor();
  };

  render() {
    const { isLoading, randomColor, quote, author } = this.state;

    return (
      <AppContainer color={randomColor} className='animated fadeIn'>
        <ContentContainer>
          <QuoteContainer>
            {isLoading && (
              <LoaderContainer>
                <StyledPulseLoader color={randomColor} />
              </LoaderContainer>
            )}
            {!isLoading && (
              <Fragment>
                <Quote color={randomColor} className='animated fadeIn'>
                  <i className='fa fa-quote-left' /> {quote}
                </Quote>
                <Author color={randomColor} className='animated fadeIn'>
                  - {author}
                </Author>
              </Fragment>
            )}
          </QuoteContainer>
          <ButtonsContainer>
            <button
              id='new-quote'
              onClick={this.handleClick}
              style={{ backgroundColor: randomColor }}>
              New Quote
            </button>
            <button
              id='tweet-quote-button'
              style={{ backgroundColor: randomColor }}>
              <a
                id='tweet-quote'
                href={`https://twitter.com/intent/tweet?text=
                  ${quote}-
                  ${author}`}
                target='_blank'
                rel='noopener noreferrer'>
                <i id='twitter-icon' className='fab fa-twitter' />
              </a>
            </button>
          </ButtonsContainer>
        </ContentContainer>
        <div id='footer'>
          by<a href='https://tsmarques.com'> TSMarques</a>
        </div>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  height: 100%;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 1000px;
  width: 40%;
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  transition: all 500ms;

  @media only screen and (max-width: 768px) {
    min-width: 80%;
    min-height: 20%;
    margin: 0 1rem;
  }
`;

const QuoteContainer = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;

const LoaderContainer = styled.div`
  align-self: center;
`;

const StyledPulseLoader = styled(PulseLoader)`
  align-self: center;
`;

const Quote = styled.h3`
  color: ${props => props.color};
  transition: all 500ms;
`;

const Author = styled.p`
  color: ${props => props.color};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  margin-top: auto;
`;

export default App;

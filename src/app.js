import React from 'react';
import './styles.css';
import styled from 'styled-components/macro';
import 'animate.css';
import { Content } from './Content';
import Footer from './Footer';

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
        <Content
          isLoading={isLoading}
          randomColor={randomColor}
          quote={quote}
          author={author}
          handleClick={this.handleClick}
        />
        <Footer />
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

export default App;

import React, { Fragment } from 'react';
import './styles.css';
import styled from 'styled-components/macro';
import 'animate.css';
import { PulseLoader } from 'react-spinners';

export const Content = ({
  isLoading,
  randomColor,
  quote,
  author,
  handleClick
}) => {
  return (
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
        <NewQuoteButton onClick={handleClick} color={randomColor}>
          {' '}
          New Quote
        </NewQuoteButton>
        <TweetButton color={randomColor}>
          <a
            id='tweet-quote'
            href={`https://twitter.com/intent/tweet?text=
                  ${quote}-
                  ${author}`}
            target='_blank'
            rel='noopener noreferrer'>
            <i id='twitter-icon' className='fab fa-twitter' />
          </a>
        </TweetButton>
      </ButtonsContainer>
    </ContentContainer>
  );
};

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
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Author = styled.p`
  font-size: 1rem;
  color: ${props => props.color};

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  margin-top: auto;
`;

const NewQuoteButton = styled.button`
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: ${props => props.color};
  padding: 1rem 1rem 0.7rem 1rem;

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const TweetButton = styled.button`
  display: inline;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.color};
  padding: 1rem 1.25rem 0.7rem 1.25rem;

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

import React, { Component } from 'react'
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import TwitterShare from './components/TwitterShare';
import axios from 'axios';

import './App.css';

class RandomQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
}

 componentDidMount() {
   this.getQuote()
 }

 getQuote() {
   let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

   axios.get(url)
      .then(res => {
        let data = res.data.quotes
        let quoteNum = Math.floor(Math.random() * data.length) //quote number
        let randomQuote = data[quoteNum] //actual quote
        
        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })
      })
 }

 getNewQuote = () => {
   this.getQuote()
 }

render() {
  const { quote, author } = this.state
  return (
    <div id="wrapper">
      <h1 className="title">Random Quote App</h1>
 
          <div id="quote-box">
        <QuoteBox quote={quote} author={author} />

        <div id="buttons">
          <TwitterShare quote={quote} author={author} />
          <Button id='new-quote' title='New Quote' onClick={this.getNewQuote} />
        </div>

      </div>
     </div>
    )
  }
}

export default RandomQuote;

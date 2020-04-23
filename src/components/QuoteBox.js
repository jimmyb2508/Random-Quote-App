import React from 'react'

const QuoteBox = ({ quote, author }) => {
  return (
    <React.Fragment>
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>
    </React.Fragment>
  )
}

export default QuoteBox;
import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: Math.floor(Math.random() * this.quotes.length)
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    $(".font-change").fadeOut(0);
    let colors = ["#809fff", "#66cc66", "#ff6666", "#9494b8", "#ff5c33", "#a64dff", "#008000", "#00b3b3", "#ff4dc4", "#0073e6", "#a3a375", "#ff6666", "#00cccc", "#3366cc", "#9966ff"];
    this.setState({
      index: Math.floor(Math.random() * this.quotes.length)
    });
    let randomColor = Math.floor(Math.random() * 9);
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet/?text=\"" + this.quotes[this.state.index].text) + '"';
    $(".background-change").css("background-color", colors[randomColor]);
    $(".font-change").css("color", colors[randomColor]);
    $(".font-change").fadeIn(1200);
  }
  
  quotes = [{text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt"}, 
            {text: "There is nothing permanent except change.", author: "Heraclitus"}, {text: "You cannot shake hands with a clenched fist.", author: "Indira Gandhi"}, 
            {text: "Learning never exhausts the mind.", author: "Leonardo da Vinci"}, 
            {text: "There is no charm equal to tenderness of heart.", author: "Jane Austen"},
            {text: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill"}, 
            {text: "Keep your face always toward the sunshine - and shadows will fall behind you.", author: "Walt Whitman"}, 
            {text: "Happiness can exist only in acceptance.", author: "George Orwell"}, 
            {text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Hellen Keller"}, 
            {text: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.", author: "Oscar Wilde"}, 
            {text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle"}, 
            {text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou"}, 
            {text: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn"}, 
            {text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson"},
            {text: "The only true wisdom is in knowing you know nothing.", author: "Socrates"}, 
            {text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw"}, 
            {text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard"}, 
            {text: "We love life, not because we are used to living but because we are used to loving.", author: "Friedrich Nietzsche"}, 
            {text: "What we achieve inwardly will change outer reality.", author: "Plutarch"}, 
            {text: "The secret of getting ahead is getting started.", author: "Mark Twain"},
            {text: "If opportunity doesn't knock, build a door.", author: "Milton Berle"}]
  
  render() {
    
    const quote = this.quotes[this.state.index]
    return (
      <div id="box">
        <p id="text" className="font-change"><i className="fas fa-quote-left"/> {quote.text}</p>
        <p id="author" className="font-change">-{quote.author}</p>
        <div id="buttons">
          <a href="https://twitter.com/intent/tweet/?text=" target="_blank" id="tweet-quote"><button id="tweet-button" className="btn btn-default background-change"><i id="tweet-icon" className="fab fa-twitter"/></button></a>
          <button onClick={this.handleClick} id="new-quote" className="btn btn-default background-change">New quote</button>
        </div>
      </div>
    );
  }
}

React.render(<Component/>, document.getElementById("quote-box"));

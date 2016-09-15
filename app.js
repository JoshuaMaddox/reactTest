

let App = React.createClass({ //Can Only Have one element returned

  getInitialState() {
    return {
      newTweet: '',
      tweets: []
    }
  },

  sendTweet() {
    let tweet = this.refs.newTweet.value;
    let { tweets } = this.state; 

    this.setState({
      //we can't mutate the old array 
      //so we must make a new array with a new item at the end of it
      tweets: [...tweets, tweet],
      //Clear the input
      newTweet: ''
    })
  },

  onInputChange(e){
    this.setState({newTweet: e.target.value});
  },

  render() {
    let { newTweet, tweets } = this.state;
    return (
      <div> 
        <h1>JQuery Tweet Box</h1>
        <input type="text" ref='newTweet' value={newTweet} onChange={this.onInputChange}/>
        {/*disabled the button if the tweet is over a certain length*/}
        <button disabled={newTweet.length > 140} onClick={this.sendTweet}>Send</button> 
        <h4>Count: {140 - newTweet.length} </h4>
        <TweetList tweets={tweets} /> {/*//A prop*/}

      </div>
    )
  }
});

let TweetList = props => {
  let TweetItems = props.tweets.map((tweet, index) => {
    return (
      <li key={index}>{tweet}</li>
    )
  })

  return (
    <ul>
      {TweetItems}
    </ul>
  )
}


ReactDOM.render(
  <App/>,
  document.getElementById('root') //where
);


















// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let Counter = React.createClass({
//   getInitialState() {
//     //wants us to return an object - it is the intial state of
//     return {
//       count: 0
//     }
//   },

//   increment() {
//     console.log('increment'),
//     this.setState({ //Replaces the former state
//         count: this.state.count + 1
//       }); // give the keys we want to change along with the desired new state
//   },

//   decrement() {

//     if(this.state.count === 0) {
//       return
//     }

//     this.setState({
//       count: this.state.count -1
//     });
//   },

//   render: function() {
//     //wants to return some element
//     return (
//       <div>
//         <h3>Count: {this.state.count}</h3>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     )
//   }
// });
import React from 'react';

export default class StartOrder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
      <div className="welcomepage">
        <h2>Chosen Food every 5 days.</h2>
        <h3>Today on the table:  <span className="underline">{this.props.meal}</span> </h3>
        <button
             className="btn"
             onClick={this.props.nextPage}>
             Order Today's Meal!
       </button>
      </div>
    )
  }

  nextPage(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      password : this.refs.password.getDOMNode().value,
      email    : this.refs.email.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextPage()
  }

}

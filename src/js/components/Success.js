import React from 'react';

export default class AddressForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
      return (
        <div className="successwrapper">
            <div className="successpage">
                <div className="wrapper">
                    <h4>Thank you for your order, Spiros</h4>
                    <h5>Order is on the way.</h5>
                </div>
            </div>
            <button className="btn mainbtn" onClick={this.props.resetState}>Close</button>
        </div>
      )
    }

  nextPage(e) {
    e.preventDefault();
  }

}

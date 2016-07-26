import React from 'react';

export default class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)

        this.render = this.render.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    render () {
        console.log(this.props.orderValues)
      return (
          <div className="confirmpage">
              <div className="wrapper">
            <h4>Everything Correct?</h4>
            <div className="orderinfo">

                <h5 className="label">Your Order:</h5>
                    <div>
                      <ul className="leftside">
                        <li>{this.props.meal}:</li>
                        <li>{this.props.orderValues.quantity}x</li>
                      </ul>
                      <ul className="rightside">
                        <li>Pizza Size:</li>
                        <li>{this.props.orderValues.pizza}cm</li>
                      </ul>
                      <ul className="leftside">
                        <li>Ingredients:</li>
                        <li>{this.props.orderValues.ingredients.join(', ')}</li>
                      </ul>
                      <ul className="rightside">
                        <li>Cheese Rand:</li>
                        <li>Yes{this.props.orderValues.cheeserand}</li>
                      </ul>
                  </div>
            </div>
            <div className="addressinfo">
                <h5 className="label">Delivery Address:</h5>
                <ul>
                  <li>{this.props.orderValues.name} {this.props.orderValues.surname}</li>
                  <li>{this.props.orderValues.street} {this.props.orderValues.strnumber}</li>
                  <li>{this.props.orderValues.plz} {this.props.orderValues.city}</li>
                </ul>
            </div>
            <div className="forbackwards">
              <button className="backbtn" onClick={this.props.previousPage}>Back</button>
              <button className="btn mainbtn" onClick={() => { this.props.submitForm(this.props.orderValues) }}>
                  Make Order</button>
            </div>
        </div>

          </div>
      )
    }

  nextPage(e) {
    e.preventDefault();
  }

}

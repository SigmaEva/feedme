import React from 'react';

export default class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.orderValues;
        this.render = this.render.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    handleChange (key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    render() {
    return (
        <div className="addresspage">
            <div className="wrapper">
            <h4>Delivery Address</h4>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={this.handleChange('name')}
                        ref="name" value={this.state.name} />
                </div>
                <div>
                    <label>Surname</label>
                    <input type="text" ref="surname"
                         onChange={this.handleChange('surname')}
                           value={this.state.surname} />
                </div>
                <div className="streetnumber">
                <label>Street/No</label>
                    <input type="text" ref="street"
                           onChange={this.handleChange('street')}
                           value={this.state.street} />
                    <input type="number" ref="streetnumber"
                           onChange={this.handleChange('strnumber')}
                           value={this.state.strnumber} />
                </div>
                <div className="codecity">
                    <label>Postcode/City</label>
                    <input type="text" ref="postalcode"
                           onChange={this.handleChange('plz')}
                           value={this.state.plz} />
                    <input type="text" ref="city"
                          onChange={this.handleChange('city')}
                          value={this.state.city} />
                </div>
                <div className="forbackwards">
                    <button className="backbtn" onClick={this.previousPage}>Back</button>
                    <button className="btn mainbtn" onClick={this.nextPage}>Next</button>
                </div>
            </form>
            </div>
        </div>
    )
  }

    previousPage(e) {
        e.preventDefault();
        this.props.saveValues(this.state)
        this.props.previousPage()
    }

    nextPage(e) {
        var self = this;
        e.preventDefault();
        this.props.saveValues(this.state)
        this.props.nextPage()
    }

}

import React from 'react';

var newIngredient = null;
var pizzaSize = null;
var isCheesy = null;

export default class PizzaForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.sizeChange = this.sizeChange.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.render = this.render.bind(this);

        this.state = {
            extras: this.props.orderValues.ingredients,
            cheeserand : this.props.orderValues.cheeserand,
            pizza: this.props.orderValues.pizza,
            radios: {
              'small': '30',
              'medium': '40',
              'large': '50'
            }
      }
    }

    renderRadioWithLabel(key,value) {
        var isChecked = value === this.state.pizza;

        return (
          <label
                className={"radio " + key}
                key={key}
                htmlFor={key}>
          <input id={key}
                 onChange={this.sizeChange}
                 type="radio"
                 checked={isChecked}
                 value={value} />
          <span>{value}</span>
          </label>
        );
      }

    renderRadios() {
    return (
        <div>
            {Object.keys(this.state.radios).map(function(key) {
                return this.renderRadioWithLabel(key,this.state.radios[key]);
            }, this)}
        </div>
    );
    }

    handleChange(event) {
        if(event.target.value == "cheesy"){
            isCheesy = this.state.cheeserand;
            this.setState({cheeserand: isCheesy ? false : true });
        }
        newIngredient = event.target.value;
    }

    sizeChange(event) {
        pizzaSize = event.target.value;
        this.setState({pizza: pizzaSize});
    }

    addIngredient() {
        if(!this.state.extras.includes(newIngredient) || newIngredient === ""){
            this.setState({extras: this.state.extras.concat([newIngredient])});
        }
    }

    render() {
    var extras = (this.state.extras).map(function(extra){
        return <li key={extra}>{extra}</li>;
    })
    
    return (
      <div className="pizzapage">
          <div className="wrapper">
        <h4>Your Order</h4>
        <form>
        <fieldset className="pizzasize">
            <label className="label">Choose a Pizza in cm</label>
            {this.renderRadios()}
        </fieldset>

        <fieldset className="pizzaingredients">
            <label className="label">Ingredients</label><br/>
            <div>
                <select onChange={this.handleChange}>
                      <option value=""> Choose Ingredients </option>
                      <option value="Onion">Onion</option>
                      <option value="Mushrooms">Mushrooms</option>
                      <option value="Bacon">Bacon</option>
                      <option value="Tomato sauce">Tomato Sauce</option>
                </select>
                <span onClick={this.addIngredient} className="addingredient"></span><br/>
            </div>
            <ul>{ extras }</ul>
        </fieldset>
        <fieldset className="pizzarand">
            <label className="label">Cheese Rand?
                <div className="switchbtn">
                	<input className="switchbtn-input"
                            type="checkbox"
                            value="cheesy"
                            checked={this.state.cheeserand}
                            onChange={this.handleChange}/>
                	<span className="switchbtn-label"></span>
                	<span className="switchbtn-handle"></span>
                </div>
            </label>
        </fieldset>
       </form>
       <button className="btn" onClick={this.nextPage.bind(this)}>Next</button>
       </div>
      </div>
    )
  }

    nextPage(e) {
    e.preventDefault()

    var data = {
        ingredients : this.state.extras,
        cheeserand : this.state.cheeserand,
        pizza: this.state.pizza
    }

        this.props.saveValues(data)
        this.props.nextPage()
    }
}

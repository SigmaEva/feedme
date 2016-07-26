import React from 'react';
import assign from 'object-assign';
import $ from 'jquery';

import Header from './Header';
import StartOrder from './StartOrder';
import PizzaForm from './PizzaForm';
import AddressForm from './AddressForm';
import ConfirmForm from './ConfirmForm';
import Success from './Success';

var orderValues = {
    quantity: 1,
    pizza: null,
    ingredients: [],
    cheeserand: false,
    name: null,
    surname: null,
    street: null,
    strnumber: null,
    plz: null,
    city: null
};

const initialState = {
        page: 0,
        meal: "Original Steinoffen Pizza",
        ordervalues: orderValues
};


export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.resetState = this.resetState.bind(this);
    }

    nextPage() {
        this.setState({
            page : this.state.page + 1
        })
    }

    previousPage() {
        this.setState({
            page : this.state.page - 1
        })
    }

    showPage() {
        console.log(orderValues)
        switch (this.state.page) {
            case 0:
            return <StartOrder meal={this.state.meal}
                          nextPage={this.nextPage.bind(this)} />
            break;
            case 1:
                return <PizzaForm orderValues={orderValues}
                              nextPage={this.nextPage.bind(this)}
                              previousPage={this.previousPage.bind(this)}
                              saveValues={this.saveValues} />
                break;
            case 2:
                return <AddressForm orderValues={orderValues}
                              nextPage={this.nextPage.bind(this)}
                              previousPage={this.previousPage.bind(this)}
                              saveValues={this.saveValues} />
                break;
            case 3:
                return <ConfirmForm orderValues={orderValues}
                              meal={this.state.meal}
                              nextPage={this.nextPage.bind(this)}
                              previousPage={this.previousPage.bind(this)}
                              submitForm={this.submitForm}
                              saveValues={this.saveValues} />
                break;

            case 4:
            return <Success resetState={this.resetState}
                            orderValues={orderValues}/>
            break;
        }
    }

    saveValues(order_value) {
        return function() {
            orderValues = assign({}, orderValues, order_value)
        }.bind(this)()
    }

    resetState() {
        this.setState(initialState);
    }

    submitForm(data) {
        var self= this;
        var root = 'http://jsonplaceholder.typicode.com';

        $.ajax({
            type: 'POST',
            url: root + '/posts',
            data: data,
        }).done(function(data) {
            self.nextPage();
        }).fail(function(jqXhr) {
            console.log('Error');
        });
    }

    render() {
    return (
        <main>
            <Header page={this.state.page}
                    nextPage={this.nextPage.bind(this)}
                    resetState={this.resetState.bind(this)}/>
            {this.showPage()}
        </main>
    )
  }
}

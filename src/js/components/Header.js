import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var header = null;

		if (this.props.page == 0) {
			header = (
                  <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Today's Meal</a></li>
                    <li><a href="#">More</a></li>
                    <li>
                      <a className="btn" onClick={this.props.nextPage}>Order Today's meal</a>
                    </li>
                  </ul>
			);
		}else {
            header = (
                <ul>
                  <li><a href="#">Order</a></li>
                  <li><a href="#">Address</a></li>
                  <li><a href="#">Finish</a></li>
                  <li>
                    <a className="btn" onClick={this.props.resetState}>Cancel Order</a>
                  </li>
                </ul>
			);
        }

        return (
            <header>
                <a href="/" className="logo">
                    <h1>feed.me</h1>
                </a>
                {header}
            </header>
        )
  }
}

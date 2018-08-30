import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';

class PaypalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      env: 'sandbox',
      client: {
        sandbox:
          'AVrNDOVJ48PZn7i034b3iZ-x3V0X2cSstKALK6_oETgcyHF-qFqp9xLaWTwZEAMRCFNmtIMGcNGLSQUx',
        production: '<insert production client id>'
      },

      commit: true,
      currency: 'MXN',
      showButton: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const isLoadedButWasntLoadedBefore =
      !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }

  payment(data, actions) {
    const { total, items } = this.props;
    const { currency } = this.state;

    console.log(items);

    return actions.payment.create({
      transactions: [
        {
          amount: {
            total,
            currency
          },
          item_list: {
            items: [
              {
                quantity: '1',
                name: 'item name 1',
                description: 'description 1',
                price: '32',
                currency: 'MXN',
                sku: 'sku 1'
              }
            ]
          }
        }
      ]
    });
  }
  onAuthorize(data, actions) {
    return actions.payment.execute().then(function(paymentData) {
      console.log('SUCESSS', paymentData);
    });
  }

  render() {
    const { showButton } = this.state;

    return (
      <div>
        {showButton && (
          <paypal.Button.react
            commit={this.state.commit}
            env={this.state.env}
            client={this.state.client}
            payment={(data, actions) => this.payment(data, actions)}
            onAuthorize={(data, actions) => this.onAuthorize(data, actions)}
          />
        )}
      </div>
    );
  }
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(
  PaypalButton
);

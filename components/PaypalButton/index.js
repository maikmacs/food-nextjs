import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';

import { paypalSucess } from '../../redux/actions/paypal';
import { Button } from 'reactstrap';

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
    const { sagaSucess } = this.props;

    return actions.payment.execute().then(function(paymentData) {
      sagaSucess(paymentData);
    });
  }

  render() {
    const { showButton } = this.state;
    const { total, items } = this.props;

    return (
      <div>
        {/*showButton && (
          <paypal.Button.react
            commit={this.state.commit}
            env={this.state.env}
            client={this.state.client}
             payment={(data, actions) => this.payment(data, actions)}
            onAuthorize={(data, actions) => this.onAuthorize(data, actions)}
          />
        )*/}
        <Button
          color="success"
          href="https://sindelantal-backend.herokuapp.com/paypal/buy/"
        >
          Pagar
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  sagaSucess: payload => dispatch(paypalSucess(payload))
});

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaypalButton)
);

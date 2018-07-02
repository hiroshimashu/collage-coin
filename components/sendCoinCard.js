import React, { Component } from 'react';
import Coin from "../ethereum/coin";
import { Button, Icon } from 'semantic-ui-react';
import web3 from '../ethereum/web3';







class SendCoinCard extends Component {


    state = {
        BronzeLoad: false,
        SilverLoad: false,
        GoldLoad: false,
        BlackLoad: false,
        errorMessage: ''
    }


    sendBronzeCoin = async event => {
        event.preventDefault();
        console.log('Bronze increased!');
        const user = Coin(this.props.address);
        this.setState({BronzeLoad: true});
        console.log(web3.eth.defaultAccount);

        try {
            const accounts = await web3.eth.getAccounts();
            await user.methods.SendBronzeCoin().send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({SilverLoad: false});

    }


    sendSilverCoin = async event => {
        event.preventDefault();
        console.log('silver increased!');
        const user = Coin(this.props.address);
        this.setState({SilverLoad: true});

        try {
            const accounts = await web3.eth.getAccounts();
            await user.methods.SendSilverCoin().send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({SilverLoad: false});
    }


    sendGoldCoin = async event => {
        event.preventDefault();
        console.log('Gold increased!');
        const user = Coin(this.props.address);
        this.setState({GoldLoad: true});

        try {
            const accounts = await web3.eth.getAccounts();
            await user.methods.SendGoldCoin().send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({GoldLoad: false});
    }


    sendBlackCoin = async event => {
        event.preventDefault();
        console.log('Black increased!');
        const user = Coin(this.props.address);
        this.setState({BlackLoad: true});

        try {
            const accounts = await web3.eth.getAccounts();
            await user.methods.SendBlackCoin().send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({BlackLoad: false});
    }

    render() {
        return (
            <div>
                <Button color='brown' loading={this.state.BronzeLoad} onClick={this.sendBronzeCoin}>
                    <Icon name='star'/>
                    Brown
                </Button>
                <Button color='grey' loading={this.state.SilverLoad} onClick={this.sendSilverCoin}>
                    <Icon name='star'/>
                    Silver
                </Button>
                <Button color='yellow' loading={this.state.GoldLoad} onClick={this.sendGoldCoin}>
                    <Icon name='star'/>
                    Gold
                </Button>
                <Button color='black' loading={this.state.BlackLoad} onClick={this.sendBlackCoin}>
                    <Icon name='star'/>
                    Black
                </Button>
            </div>
        );

    }
}

export default SendCoinCard;


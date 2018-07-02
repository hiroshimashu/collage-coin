import React, { Component } from 'react';
import Layout from '../components/Layout';
import User from '../ethereum/user';
import { Card, Icon } from 'semantic-ui-react';

class UserShow extends Component {
    static async getInitialProps(props) {

        const user = User(props.query.address);
        const name = await user.methods.GetName().call();
        const Bronze = await user.methods.GetNumBronzeCoin().call();
        const Silver = await user.methods.GetNumSilverCoin().call();
        const Gold = await user.methods.GetNumGoldCoin().call();
        const Black = await user.methods.GetNumBlackCoin().call();


        return {name, Bronze, Silver, Gold, Black};
    }

    renderCoin(coin) {
        const items = [
            {
                header: "BronzeCoin",
                description: (
                    <div style = {{
                        display: "-webkit-flex",
                        display: "-moz-flex",
                        display: "-ms-flex",
                        display: "-o-flex",
                        display: "flex"
                    }}>
                        <Icon color='brown' name='star' />
                        <div style = {{ marginLeft: '10px'}}>×</div>
                        <div style = {{ marginLeft: '20px'}}>{coin.Bronze}</div>
                    </div>
                ),
                fluid: true
            },
            {
                header: "SilverCoin",
                description: (
                    <div style = {{
                        display: "-webkit-flex",
                        display: "-moz-flex",
                        display: "-ms-flex",
                        display: "-o-flex",
                        display: "flex"
                    }}>
                        <Icon color='grey' name='star' />
                        <div style = {{ marginLeft: '10px'}}>×︎</div>
                        <div style = {{ marginLeft: '20px'}}>{coin.Silver}</div>
                    </div>
                ),
                fluid: true
            },
            {
                header: "GoldCoin",
                description: (
                    <div style = {{
                        display: "-webkit-flex",
                        display: "-moz-flex",
                        display: "-ms-flex",
                        display: "-o-flex",
                        display: "flex"
                    }}>
                        <Icon color='yellow' name='star' />
                        <div style = {{ marginLeft: '10px'}}>×︎</div>
                        <div style = {{ marginLeft: '20px'}}>{coin.Gold}</div>
                    </div>
                ),
                fluid: true
            },
            {
                header: "BlackCoin",
                description: (
                    <div style = {{
                        display: "-webkit-flex",
                        display: "-moz-flex",
                        display: "-ms-flex",
                        display: "-o-flex",
                        display: "flex"
                    }}>
                        <Icon color='black' name='star' />
                        <div style = {{ marginLeft: '10px'}}>×︎</div>
                        <div style = {{ marginLeft: '20px'}}>{coin.Black}</div>
                    </div>
                ),
                fluid: true
            }
        ]

        return <Card.Group
            centered
            items = {items}
        />
    }

    render() {
        console.log(this.props);

        return (
            <Layout>
                <h3>{this.props.name}</h3>
                {this.renderCoin(this.props)}
            </Layout>
        )
    }
}

export default UserShow;
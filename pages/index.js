import React, { Component } from 'react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import Coin from '../ethereum/coin';
import { Card, Tab, Button, Icon } from 'semantic-ui-react';
import SendCoinCard from '../components/sendCoinCard';
import { Link } from '../routes';

class CoinIndex extends Component {
    static async getInitialProps() {
        const participantsAddress = await factory.methods.getParticipants().call();

        // get participant name and record them to participants
        const participantsPromise = participantsAddress.map(async (address) => {
            const Address = address;
            const participantInstance = Coin(address);
            return await participantInstance.methods.name().call();
        });

        let participants  = Promise.all(participantsPromise)
            .then(function(results) {return  {results, participantsAddress} ;})

        return participants;
    }

    renderParticipants = () => {

        const items = [
            {
                header: this.props.results[0],
                description:(
                    <Link route = {`/user/${this.props.participantsAddress[0]}`}>
                        <a>詳細</a>
                    </Link>
                ),
                fluid: true
            },
            {
                header: this.props.results[1],
                description: (
                    <Link route = {`/user/${this.props.participantsAddress[1]}`}>
                        <a>詳細</a>
                    </Link>
                ),
                fluid: true
            },
            {
                header: this.props.results[2],
                description:(
                    <Link route = {`/user/${this.props.participantsAddress[2]}`}>
                        <a>詳細</a>
                    </Link>
                ),
                fluid: true
            },
            {
                header: this.props.results[3],
                description:(
                    <Link route = {`/user/${this.props.participantsAddress[3]}`}>
                        <a>詳細</a>
                    </Link>
                ),
                fluid: true
            },
            {
                header: this.props.results[4],
                description:(
                    <Link route = {`/user/${this.props.participantsAddress[4]}`}>
                        <a>詳細</a>
                    </Link>
                ),
                fluid: true
            },
            {
                header: this.props.results[5],
                description:(
                    <Link route = {`/user/${this.props.participantsAddress[5]}`}>
                        <a>詳細</a>
                    </Link>
                ),
                fluid: true
            },
        ]


        return <Card.Group
                   key = 'participant'
                   items = {items}
               />
    }


    renderSendCoin = () => {
        const items2 = this.props.results.map((result,i) => {
            const userAddress = this.props.participantsAddress[i];

            return(
                {
                    header: this.props.results[i],
                    description: (<SendCoinCard address = {userAddress} />),
                    fluid: true
                }
            );
        })

        return  <Card.Group
            key = 'coin'
            items = {items2}
        />
    }

    renderTab() {
        const panes = [
            { menuItem: '参加者', render: () => <Tab.Pane>{this.renderParticipants()}</Tab.Pane> },
            { menuItem: 'コインを送る', render: () => <Tab.Pane>{this.renderSendCoin()}</Tab.Pane> },
        ]

        return <Tab panes={panes} />
    }

    render() {
        return (
            <div>
                <Layout>
                    {this.renderTab()}
                </Layout>
            </div>
        )
    }

};

export default CoinIndex;


import React from 'react';

const Authenticate = Content => class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'stranger',
            loggedIn: false,
        };
    }

    componentDidMount() {
        if (localStorage.getItem('lambdaTimesLoggedIn')) {
            this.setState({
                username: localStorage.getItem('lambdaTimesLoggedIn'),
                loggedIn: true,
            });
        }
    }

    render () {
        if (this.state.loggedIn) {
            return <Content username = { this.state.username } />;
        } else {
            return (
                <div>
                    <h3>Welcome { this.state.username }. Please log in to view content.</h3>
                </div>
            );
        }
    }
}

export default Authenticate;

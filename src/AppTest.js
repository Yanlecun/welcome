import React, {Component} from 'react'

const e = React.createElement;

class AppTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            liked : false,
        };
    }
    render() {
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            this.state.liked === true ? 'Liked' : 'Like',
        );
    }
}

export default AppTest;
import React, {Component} from 'react';

import '/imports/scss/Splash.scss'

class Splash extends Component{
    componentDidMount() {
        document.querySelectorAll('.splash div').forEach((el, idx) => {

            setTimeout(() => el.style.opacity = 1, (idx + 1) * 750)
        })
    }

    render() {
        return (
            <div className="splash">
                <div className="title">Welcome!</div>
                <div>Are you at AppAcademy and stuck on a problem?</div>
                <div>Login using Github and I'll help you out!</div>
            </div>
        );
    }

};

export default Splash;
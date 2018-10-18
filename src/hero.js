import React, { Component } from 'react';



class Hero extends Component {
    state = {  }
    render() {
        return (
            <section className="hero">
                <div className="background-image" >
                    <div className="hero-content-area">
                        <h1>Mountain Travel</h1>
                        <h3>Unmissable Adventure Tours Around The World</h3>
                        <a href="/" className="btn">Contact Us Now</a>
                    </div>
                </div>
          </section>

        );
    }
}

export default Hero ;
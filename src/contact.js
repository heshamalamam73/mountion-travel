import React, { Component } from 'react';




class Contact  extends Component {
    render() {
        return (
                <div>
                    <section className="contact">
                        <h3 className="title">Learn more</h3>
                        <p>Want to know about our upcoming mountain-related events, or come to one of our mixers? Just sign up for our mailing list. No spam from us, we promise! Except for the spam we give you to keep up your energy while you're hiking through the mountains. We have tons of that.</p>
                        <form>
                        <input type="email" placeholder="Email"/>
                        <a href="/" className="btn">Subscribe now</a>
                        </form>
                    </section>
                </div>
            
        );
    }
}

export default Contact;
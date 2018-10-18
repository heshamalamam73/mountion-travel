import React, { Component } from 'react';




class Testimonials  extends Component {
    render() {
        return (
                <div>
                    <section className="testimonials">
                        <h3 className="title">Testimonials from our adventurers:</h3>
                        <p className="quote">Wow! This tour made me realize how much I love mountains. After going on one of these tours, I can safely say that they are my favorite geographic feature, and my favorite word that starts with M.</p>
                        <h4 className="author">- Colt Steele</h4>
                        <p className="quote">I never understood why people cared so much about mountains. But then I went on one of these tours. Now I can't understand people who <em>don't</em> care about mountains!</p>
                        <h4 className="author">- Elie Schoppik</h4>
                        <p className="quote">If you want to understand the universe, head to the mountains. I mean, seriously. It's like, woah. You know? It's like that.</p>
                        <h4 className="author">- Tim Garcia</h4>
                    </section>
                    
                </div>
            
        );
    }
}

export default Testimonials;
import React, { Component } from 'react';




class Footer  extends Component {
    render() {
        return (
               
                      <footer>
                        <p>Images courtesy of <a href="https://www.pexels.com/">pexels</a>.</p>
                        <p>created by / momuzio 9/2018</p>
                        <ul>
                        <li><a href="/"><i className="fa fa-twitter-square fa-2x"></i></a></li>
                        <li><a href="/"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                        <li><a href="/"><i className="fa fa-snapchat-square fa-2x"></i></a></li>
                        </ul>
                    </footer>
                
            
        );
    }
}
export default Footer;

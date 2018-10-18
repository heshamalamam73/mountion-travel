import React, { Component } from 'react';
class Header extends Component {
    
    render() {
        return (
            <div>
                <header className='container'>
                    <h2><a href="/">Mountain Travel</a></h2>
                    <nav>
                        <li><a href="/Tours">Tours</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </nav>
                </header>
            </div>
            
        );
    }
}

export default Header;
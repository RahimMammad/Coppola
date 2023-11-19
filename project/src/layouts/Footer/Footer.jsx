import React from 'react'
import "./Footer.scss"

function Footer() {
    return (
        <footer className='footer'>
            <div className="footerbox">
                <div className="footer-top">
                    <div className="topleft">
                        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
                    </div>
                    <div className="topright">
                        <ul>
                            <li><a href="">WHAT WE DO</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">HELP AND FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a href="">WHAT WE DO</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">HELP AND FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a href="">WHAT WE DO</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">HELP AND FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className='line'></div>
            </div>
        </footer>
    )
}

export default Footer
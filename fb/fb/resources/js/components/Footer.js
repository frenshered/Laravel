import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PinterestIcon from '@material-ui/icons/Pinterest'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <section className="footer__block">
                    <section className="first__footer__section">
                        <Link to="/" className="logo">Manifest</Link>
                        <div className="footer__adress__block">
                            <a href="#">support@manifest.com</a>
                            <a href="#">+380983259080</a>
                            <a href="#">Telegram</a>
                            <a href="#">Messenger</a>
                        </div>
                    </section>
                    <section className="second__footer__section">
                        <span>Приєднуйтесь: </span>
                        <a href="#"><FacebookIcon className="social" color="primary" style={{ fontSize: 30 }} /></a>
                        <a href="#"><LinkedInIcon className="social" color="primary" style={{ fontSize: 30 }} /></a>
                        <a href="#"><InstagramIcon className="social" color="primary" style={{ fontSize: 30 }} /></a>
                        <a href="#"><YouTubeIcon className="social" color="primary" style={{ fontSize: 30 }} /></a>
                        <a href="#"><TwitterIcon className="social" color="primary" style={{ fontSize: 30 }} /></a>
                        <a href="#"><PinterestIcon className="social" color="primary" style={{ fontSize: 30 }} /></a>
                    </section>
                </section>
                
            </footer>
        )
    }
}

export default Footer
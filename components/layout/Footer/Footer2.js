import Link from 'next/link';

export default function Footer2() {
    return (
        <>
            <footer id="footer" className="footer background-blue">
                <div className="footer-top">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-item footer-about">
                                        <h6>DeckSketch</h6>
                                        <p style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                            The only fully customizable software created<br /> 
                                            for the way YOU build decks.<br />
                                            Giving you structural plans and material<br />
                                            takeoffs in seconds.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 center-resources">
                                    <div className="footer-item footer-menu">
                                        <h6>Resources</h6>
                                        <ul className="resource-links" >
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <Link href="/contact-01" title="Contact">
                                                    <span><i className="arrow-icon" ></i> Contact</span>
                                                </Link>
                                            </li>
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <Link href="/faq" title="FAQ">
                                                    <span><i className="arrow-icon"></i> FAQ</span>
                                                </Link>
                                            </li>
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <a href="https://app.decksketch.ai/auth/signin" title="Login">
                                                    <span><i className="arrow-icon"></i> Login</span>
                                                </a>
                                            </li>
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <a href="https://app.decksketch.ai/auth/signup" title="Register">
                                                    <span><i className="arrow-icon"></i> Register</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 move-social-right">

                                <div className="col-lg-4">
                                    <div className="footer-item footer-menu">
                                        <h6>Social</h6>
                                        <ul className="social-links">
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <Link href="https://www.facebook.com" title="Facebook">
                                                    <span><i className="arrow-icon"></i> Facebook</span>
                                                </Link>
                                            </li>
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <Link href="https://www.instagram.com" title="Instagram">
                                                    <span><i className="arrow-icon"></i> Instagram</span>
                                                </Link>
                                            </li>
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <Link href="https://www.twitter.com" title="X">
                                                    <span><i className="arrow-icon"></i> X</span>
                                                </Link>
                                            </li>
                                            <li style={{ opacity: '0.76', display: 'flex', alignItems: 'center' }}>
                                                <Link href="https://www.youtube.com" title="YouTube">
                                                    <span><i className="arrow-icon"></i> YouTube</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">
                                <span className="copyright-icon">©</span> 2026 DeckSketch AI, LLC - All rights reserved
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link href="/terms" title="Terms">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" title="Privacy Policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

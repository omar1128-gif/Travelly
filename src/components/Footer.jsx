import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <h5>Travelly &copy;</h5>
                <ul>
                    <li>
                        <a href="#" title="twitter-social-media">
                            <img
                                src="/icons/twitter.svg"
                                alt="twitter-social-media"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="youtube-social-media">
                            <img
                                src="/icons/youtube.svg"
                                alt="youtube-social-media"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="instagram-social-media">
                            <img
                                src="/icons/instagram.svg"
                                alt="instagram-social-media"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

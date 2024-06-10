import { StyledFooter } from "./Footer.styled";
import { ReactComponent as GitIcon } from "../../images/svg-icons/github.svg";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../images/svg-icons/linkedin.svg";
import Logo from "../../images/images/iReX_logo.png";
import { NavLink } from "react-router-dom";



export const Footer = () => {
    const year = new Date().getFullYear();


    return(
        <StyledFooter>
            <div className="footer-left-cont order-one">
                <div className="left-text-cont">
                    <p>Designed & Developed by:</p>
                </div>
                <div className="right-text-cont">
                    <p>Oleg Koshevy &</p>
                    <p>Arthur Gritchin</p>
                </div>
            </div>
            <div className="footer-center-cont order-two">
                <p className="footer-text-center">Copyright<span> &#169; </span>{year}</p>
                <div className="cont-for-foo-pic">
                    <img className="footer-img" src={Logo} alt="irex_logo"/>
                </div>
            </div>
            <div className="footer-right-cont">
                <p>Find us on:</p>
                <div className="footer-link-cont">
                    <ul className="footer-social-list">
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://github.com/SonGlad"
                                aria-label="Github link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <GitIcon className="footer-icon" width={22} height={22}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://www.facebook.com/profile.php?id=100024930558745"
                                aria-label="Facebook link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <FacebookIcon className="footer-icon" width={22} height={22}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://www.linkedin.com/in/oleg-koshevy/"
                                aria-label="Linkedin link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <LinkedinIcon className="footer-icon" width={20} height={20}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://t.me/SonGlad"
                                aria-label="Telegram link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <TelegramIcon className="footer-icon" width={20} height={20}/>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="footer-social-list">
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://github.com/gritchin-artur"
                                aria-label="Github link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <GitIcon className="footer-icon" width={22} height={22}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="/"
                                aria-label="Facebook link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <FacebookIcon className="footer-icon" width={22} height={22}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://www.linkedin.com/in/artur-hrytchyn/"
                                aria-label="Linkedin link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <LinkedinIcon className="footer-icon" width={20} height={20}/>
                            </NavLink>
                        </li>
                        <li className="footer-social-item">
                            <NavLink className="footer-social-link" to="https://t.me/grit4inartur"
                                aria-label="Telegram link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <TelegramIcon className="footer-icon" width={20} height={20}/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    );
};
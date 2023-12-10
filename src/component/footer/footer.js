import logo from "../images/logo.png";
import { socialMedia } from "../images/icons";
let whoAreWe = ["About Us", "Ain Shams University", "FCIS", " Complaints / Suggestions", "Your Opinion Matters", "Contact Us"];
let ImportantLinks = ["Site Map", "Egyptian universities", "Academy Of Scientific Research", "Egyptian Knowledge Bank"];
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="col1">
                    <img className="panelFooter" src={logo} alt="logo" />
                </div>
                <div className="col2">
                    <h4>who Are We</h4>
                    <ul>
                        {whoAreWe.map((el) => {
                            return <li>{el}</li>;
                        })}
                    </ul>
                </div>
                <div className="col3">
                    <h4>Important Links</h4>
                    <ul>
                        {ImportantLinks.map((el) => {
                            return <li>{el}</li>;
                        })}
                    </ul>

                </div>
                <div className="col4">
                    <h4>
                        FollowUs
                    </h4>
                    <div>
                        {socialMedia[1]}
                        {socialMedia[2]}
                        {socialMedia[3]}
                        {socialMedia[4]}
                    </div>
                    <span>E-mail:</span> <span>ums.support@cis.asu.edu.eg</span>
                    <br />
                    <span>Phone:</span>
                    <span>
                        26831231 , 26831471 , 26831474
                    </span>
                </div>
            </div>
            <div className="row"></div>
        </>
    );
}
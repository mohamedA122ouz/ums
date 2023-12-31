import "./header.css";
import { socialMedia } from "../images/icons";
import { useState, useEffect, useRef } from 'react';
function Header({ count, ui, hideContent ,showContent}) {
    const [width, changeWidth] = useState(() => window.innerWidth);
    const sideBar = useRef(null);
    const items = [<a  href="tel:+2-26831474 "><span style={{color:"gray"}}>Phone:</span>+2-26831474 </a>,...socialMedia];
    useEffect(() => {
        window.addEventListener("resize", () => {
            changeWidth(window.innerWidth);
        });
        return window.removeEventListener("resize", () => {
            changeWidth(window.innerWidth);
        });
    }, []);
    return (
        <div className="headerContainer">
            <ul className="ulHeader">

                {(width <= 800) && (
                    <>
                        <li style={{ height: `100vh`, zIndex: 30 }} className="sideBar" ref={sideBar}>
                            <ul>
                                <li className="closeSideBar" onClick={() => { sideBar.current.style.width = "0px"; showContent() }}>
                                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" />
                                    </svg>
                                </li>
                                {items.map((el, i) => <li className="items" key={"item" + i}>{el}</li>)}
                            </ul>
                        </li>
                    </>)}
                <li><img className="logo" src={"https://ums.asu.edu.eg//images/arms_of_Egypt_(Official).svg"} alt="logo" /></li>
                {(width >= 800) && items.map((el, i) => <li className="items" key={"item" + i}>{el}</li>)}
                <li className="align" key={"iteme"}></li>
                <li className="lang items">
                    <img src="https://ums.asu.edu.eg/images/Flags/eg.png" alt="egypt" />
                    عربي
                </li>
            </ul>
        </div>
    );
}


export default Header;
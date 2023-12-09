import Icons from "../images/icons";
export function Card({ color, text ,i,onClick}) {
    return (
        <div className="cardContainer" onClick={()=>onClick()}>
            <div>
                <div className="SVGContainer" style={{ backgroundColor: "#" + color }}>
                    {Icons[i]}
                </div>
                <h6>
                    {text}
                </h6>
            </div>
        </div>
    );
}
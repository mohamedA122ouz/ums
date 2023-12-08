import Icons from "../images/icons";
export function Card({ color, text ,i}) {
    return (
        <div className="cardContainer" >
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
export function Card({ color, text }) {
    return (
        <div className="cardContainer" >
            <div>
                <div className="SVGContainer" style={{ backgroundColor: "#" + color }}>
                </div>
                <h6>
                    {text}
                </h6>
            </div>
        </div>
    );
}
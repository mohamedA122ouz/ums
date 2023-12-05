import { useEffect, useRef } from "react";
import Bar from "./bar";


export default function Silder({ imageArray }) {
    let currentImage = 0;
    let text = ["Ain Shams University electronic systems", "Book Your Course Now", "What Are Services That Are Provided On Our System?"];
    let smallText = ["Which manages the educational and administrative process within the university", "You book courses on Coursera or apply to Postgraduate Studies online using our system", "You can know your results, submit petitions, pay expenses, register for materials,file complaints"];
    let buttons = ["Discover",
        "Your Opinion Matters", "Apply for PG Studies",
        "Book Your Course","Login"];
    let ref = useRef(null);
    const imgWidth = imageArray.map((el) => {
        let im = document.createElement("img");
        im.src = el;
        return im.width;
    });

    console.log(imgWidth);
    function changeImage(index) {
        currentImage = index;
        ref.current.style.transform = `translate(-${(index * 100)}vw)`;
    }
    return (
        <>
            <div className="container">
                <div className="showBar" >
                    <div ref={ref}>
                        {imageArray.map((el, i) => {
                            return <div key={"div" + i} className={"imgContainer IMG_" + i} >
                                <span>
                                    <h2 style={{ fontSize: "30pt" }}>{text[i]}</h2>
                                    <p>{smallText[i]}</p>
                                    {i!=2?<button>{buttons[i]}</button>:<button>Login</button>}
                                    {i!=2?<button>{buttons[i+1]}</button>:""}
                                </span>
                            </div>
                        })}
                    </div>
                </div>
                <Bar currentImage={changeImage} imageArray={imageArray}></Bar>
            </div>
        </>
    );
}
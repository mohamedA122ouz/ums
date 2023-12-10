import { useEffect, useState } from "react";

export default function Bar({ currentImage, imageArray }) {
    const [current, change] = useState(() => 0);
    function handleClickSpan(e) {
        // change(e.target.id);
        let id = e.target.id;
        id = +(id.split('#'))[1];
        console.log(id);
        change(id);
        currentImage(id);
    }
    useEffect(()=>{
        let id = setInterval(()=>{
            console.log("cha")
            moveBackward();
        },4000);
        return ()=> clearInterval(id);
    },[]);
    function moveBackward() {
        console.log("moveback");
        change((value) => {
            let newValue = (value - 1) % imageArray.length;
            newValue = newValue < 0 ? imageArray.length - 1 : newValue;
            currentImage(newValue);
            return newValue;
        });
    }
    function moveForward() {
        change((value) => {
            let newValue = (value + 1) % imageArray.length;
            currentImage(newValue);
            return newValue;
        });
    }
    return (
        <>
            <div className="backward" onClick={moveBackward}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></div>
            <div className="forward" onClick={moveForward}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></div>
            <div className="barElements">
                <div className="slideBar" >
                    {imageArray.map((el, i) => {
                        return <div key={"divI" + i} className={(i === current ? "imgContainer active bar" : "imgContainer bar")} id={"DIV#" + i}><span key={i} onClick={handleClickSpan} className={"slideImgs" + (i == current ? " activeI" : "")} id={"SPAN#" + i} ></span></div>
                    })}
                </div>
            </div>
        </>
    );
}
import { useEffect, useRef } from "react";

function ToTop() {
    let element = useRef(null);
    useEffect(() => {
        function showEl() {
            if (window.scrollY > 100) {
                element.current.style.visibility = "visible";
            } else {
                element.current.style.visibility = "hidden";
            }
        }
        document.addEventListener("scroll", showEl);
        return () => document.removeEventListener("scroll", showEl);
    }, []);
    return <div ref={element} className="toTop" onClick={() => { window.scrollTo(0, 0); }}>
        <svg class="svg-inline--fa fa-angle-up" ariaHidden="true" focusable="false" dataPrefix="fas" dataIcon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg>
    </div>;
}
function Camera() {
    return <div className="Camera"></div>;
}
function Robot() {
    return <div className="robot"></div>;
}
function Sound() {
    return <div className="sound"></div>;
}
function Access() {
    return <div className="access"></div>;
}

export { ToTop, Camera, Robot, Sound, Access };
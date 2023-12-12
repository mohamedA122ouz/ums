import { useEffect } from "react";
import { useRef } from "react";

function Counter() {
    let animation = useRef(null);
    useEffect(() => {
        let observer = new IntersectionObserver((object) => {
            object[0].target.classList.toggle("startAnimation", object[0].isIntersecting);
            if (object[0].isIntersecting) {
                observer.unobserve(document.querySelector(".LazyAnimation"));
            }
        }, { threshold: 0.5 });
        observer.observe(document.querySelector(".LazyAnimation"));
        return () => { observer.unobserve(document.querySelector(".LazyAnimation")) };
    }, [])
    return (
        <div className="counterContainer" >
            <div ref={animation} className="LazyAnimation">
                <div class="base-timer">
                    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                                id="base-timer-path-remaining"
                                stroke-dasharray="283"
                                class="base-timer__path-remaining color1"
                                d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0">
                            </path>
                        </g>
                    </svg>
                    <span className="numbers">
                        19+
                    </span>
                </div>
                <div class="base-timer">
                    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                                id="base-timer-path-remaining"
                                stroke-dasharray="283"
                                class="base-timer__path-remaining color2"
                                d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0">
                            </path>
                        </g>
                    </svg>
                    <span className="numbers">
                        1,229,145
                    </span>
                </div>
                <div class="base-timer">
                    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                                id="base-timer-path-remaining"
                                stroke-dasharray="283"
                                class="base-timer__path-remaining color3"
                                d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0">
                            </path>
                        </g>
                    </svg>
                    <span className="numbers">
                        220614+
                    </span>
                </div>
                <div class="base-timer">
                    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                                id="base-timer-path-remaining"
                                stroke-dasharray="283"
                                class="base-timer__path-remaining color4"
                                d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0">
                            </path>
                        </g>
                    </svg>
                    <span className="numbers">
                        20540+
                    </span>
                </div>
            </div>
        </div>);
}
export default Counter;
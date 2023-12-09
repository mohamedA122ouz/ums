import { useRef, useState } from 'react';
import './App.css';
import i1 from "./component/images/header0.jpg"
import i2 from "./component/images/header1.jpg"
import i3 from "./component/images/header2.jpg"
import Silder from './component/imageSlider/imageSilder2';
import { Card } from './component/cards/cards';
import logo from "./component/images/logo.png";
import Form from './component/form/form';
import Header from './component/header/header';
const cardText = [
    "Login",
    "Early Admission Request For Bachelor's students",
    "Graduates Association Services",
    "Faculties Services",
    "Centers Services",
    "University Conference",
    "Application for postgraduate studies",
    "Blended Learning Admission",
    "Documentation Of Certificates",
    "Book Coursera"
];
let arr = ["User Profile",
    "Schedule",
    "Grades",
    "Withdraw Course Request",
    "Appeal",
    "Completing / modifying data",
    "QR Code",
    "Course Registration",
    "Payments",
    "Complaints / Suggestions",
    "Course Registration",
    "YearworkGrades",
    "Open Course Request",
    "Payment History",
    "Bifurcation"]
function App() {
    function scrollTo(where){
        console.log("liste");
        let a = document.createElement("a");
        a.href = "#"+where;
        a.target = "self";
        document.body.append(a);
        a.click();
        document.body.removeChild(a);
    }
    return (
        <>
        <Header></Header>
            <div className='panel' ><div className='inner'> <img src={logo} alt="UMS Logo" /><p>Electronic Management System of Ain Shams University</p></div></div>
            <Silder imageArray={[i1, i2, i3]}></Silder>
            <div className='cardsContainer'>
                {cardText.map((el, i) => {
                    return <Card onClick={()=>scrollTo("viewer")} key={"cardID" + i} i={i} text={el} />
                })}
            </div>
            <div id='viewer'>
            <Form></Form>
            </div>
            <h2 style={{ textAlign: "center" }}>what are you searching For?</h2>
            <div className='cardsContainer'>
                {arr.map((el, i) => {
                    return (
                        <div className="cardContainer Nohover" style={{ height: "auto", width: "25.3%" }} >
                            <div style={{ margin: "20px" }}>
                                <h6 style={{ marginTop: "0px" }}>
                                    {el}
                                </h6>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>

            </div>
        </>
    )
}

export default App;

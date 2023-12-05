import image from "../images/loginback.jpg";
import ComboBox from "./customCombobox/comboBox";


export default function Form() {
    return (
        <>
            <div className="FlexContainer">
                <img src={image} alt="login image" />
                <div className="formContainer">
                    <h2>Login</h2>
                    <form>
                        <label>
                            College
                        </label>
                        <ComboBox></ComboBox>
                        <label>
                            userName
                        </label>
                        <input type="text" placeholder="User Name"></input>
                        <label>
                            password
                        </label>
                        <input type="password" placeholder="Password"></input>
                        <button>Login</button>
                        <div style={{display:"flex"}}>
                            <input type="checkbox" style={{width:"auto"}}></input>
                            <lebel>
                                remember me
                            </lebel>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
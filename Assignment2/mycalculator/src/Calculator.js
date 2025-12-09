import React, { useState } from "react";
import Button from "./Button.js";
import './Calculator.css';
import myPicture from './image/anuj_image.jpg';

function KeyPadComponent(props) {
    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false); 

    const ClickHandle = (e) => {
        // Task 
        if (e.target.value == "C") {
            setText("");
            setShowImage(false);
        }
        else if (e.target.value == "=") {
            // Keeping your original eval logic
            setText(eval(text1));
            alert(eval(text1));
        }
        // Task 2: 
        else if (e.target.value == "Show Me") {
            setShowImage(true);
        }
        // Task 3: 
        else if (e.target.value == "Square") {
            // Calculate square using the existing text
            let result = eval(text1);
            setText(result * result);
        }
        // Normal buttons
        else {
            setText(text1 + e.target.value);
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            {/* Existing Rows */}
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            {/* NEW ROW for Assignment Tasks */}
            <div>
                <Button label="Square" ClickHandle={ClickHandle} />
                <Button label="Show Me" ClickHandle={ClickHandle} />
            </div>

            {/* Image Section - Only shows if showImage is true */}
            {showImage ? (
                <div style={{textAlign: "center", marginTop: "10px"}}>
                    <img 
                        src={myPicture} 
                        alt="Me" 
                        style={{width: "100px", height: "100px", borderRadius: "50%"}}
                    />
                </div>
            ) : null}

        </div>
    );
}

export default KeyPadComponent;
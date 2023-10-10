import React,{useState} from 'react'
export default function (props) {
    const handleUpClick = ()=>{
        console.log("Uppercase button was clicked.");
        setText(text.toUpperCase());
    }
    const handleLoClick = ()=>{
        console.log("Lowercase button was clicked.");
        setText(text.toLowerCase());
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handlePadding = ()=>{
        console.log("remove padding was clicked.");
        setText(text.trim());
    }
    const handleExtraSpaces =() =>{
        console.log("remove extra spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text,setText]= useState('');
    // text = "new text"; wrong way to update text
    // setText("new text1"); correct way to update text
    return (
    <>
        
        <div className={`container text-${(props.mode === "light" ? "dark" : "light")}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myTextbox" className="form-label">{props.heading}</label> */}
            <textarea className={`form-control bg-${props.mode} text-${(props.mode === "light" ? "dark" : "light")}`} value={text} onChange={handleOnChange} 
            placeholder='Enter the text here...' id="myTextbox" rows="8"></textarea>
            <button className="btn btn-primary my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handlePadding} >Remove Padding</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Spaces</button>
            </div>
        </div>
        <div className={`container my-3 text-${(props.mode === "light" ? "dark" : "light")}`}>
            <h2>Your text Summary</h2>
            <p>Characters: {text.length}, Words: {text.split(" ").length} </p>
            <h2>Preview</h2>;
            {text.length>0 ? text :"Enter some text to preview"}
        </div>
            
    </>
  )
}

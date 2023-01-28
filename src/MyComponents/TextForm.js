import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text coverted to Upper Case","Success");
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text coverted to Lower Case","Success");
    }
    const handleOnChange = (event) =>{
      setText(event.target.value);
    }
   const handleClearClick = () =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared","Success");
  }
    const [text,setText] = useState("");
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#222540':'white'}} value={text} onChange={handleOnChange} id="mybox" rows="2">
        </textarea>       
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>

    </div>

    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length>0?text.trim().split(/\s+/).length:0} words and {text.length} characters</p>
      <p>{0.08 * (text.length===0?0:text.trim().split(/\s+/).length)} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter any text to Preview"}</p>
    </div>
    </>
  )
}
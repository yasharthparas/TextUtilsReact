import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  }
  const handleRemoveExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
  }
  const handleClearClick=()=>{
    let newText=''
    setText(newText)
    props.showAlert("Cleared", "success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'#002e41'}}>
    <h1 className="mb-4">{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1d1f2a':'white', color: props.mode==='dark'?'white':'#002e41'}} id="myBox" rows="3"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces} >Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-success mx-1 my-1"  onClick={handleClearClick}>Clear</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'#002e41'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+\n/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+\n/).filter((element)=>{return element.length!==0}).length} minutes read time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  )
}


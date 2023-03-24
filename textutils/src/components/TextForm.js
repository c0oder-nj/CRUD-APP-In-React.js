import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("Enter Text Here..");
    const [search,setSearch] = useState("Enter word to search");
    const [replace,setReplace] = useState("Enter word to replace");
    
        // text = "Hello uncle" // wrong way to set the text
        // setText('Hello Uncle') // write way to set the text
        // the parameter passed inside the useState will be your intiale value of first variable text, and in order to update the value of text variabel you need to use function setText e.g. setText("Hello there"); so this will update the text value

        // now why we use this so this will update the value of text at any time we change the value from frontned

        // this principal of this is called state basically text ek state hai jo runtime par change ho rahi hai setText function ki help se 


    const handleUpClick = ()=>{
        let new_text = text.toUpperCase()
        setText(new_text)
        props.showAlert("Converted to UpperCase","success")
    }
    
    const handleLoClick = ()=>{
        let new_text = text.toLowerCase()
        setText(new_text)
        props.showAlert("Converted to LowerCase","success")
    }
    
    const clearText = ()=>{
        let new_text = ''
        setText(new_text)
        props.showAlert("Text is cleared now","success")
    }

    const searchRepl = ()=>{
        let sr = document.getElementById('sr')
        if(sr.style.display === 'block'){
            sr.style.display = 'none';
        }
        else{
            sr.style.display = 'block'
        }
        // let new_text = ''
        // setText(new_text)
    }

    const handleOnChange = (event)=>{
        // console.log("Change function is clicked")
        setText(event.target.value)
    }


    const replaceText = ()=>{
        let reg_exp = new RegExp(search,"gi")
        let new_text = text.replace(reg_exp,replace)
        setText(new_text)
        props.showAlert("Your word is replaced completely","success")
    }

    // let bg_color = 'grey'
    const darkS = {
        // two diff. methods inorder to synchronize with dark button
        backgroundColor:`${props.mode === 'dark'?'rgb(72 87 114)':'white'}`,
        color:props.mode === 'dark'?'white':'black'
    }

    const noOfWords = ()=>{
        let len = 0
        let txt = text.trim()
        // console.log(txt)
        txt = txt.replace(/\s+/g,' ')
        console.log(txt)

        txt = txt.split(' ')
        // console.log(txt)
        if(txt.length === 1 && txt[0] === ''){
            len = 0
        }
        else{
            len = txt.length
        }
        console.log(len)
        return len

    }

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className='text-center'>{props.formTitle}</h1>
            <div className="mb-2">
                <textarea className="form-control" value={text} id="myText" rows="12" onChange={handleOnChange} style={darkS}></textarea></div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>All Uper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>All Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={searchRepl}>Search And Replace</button>
                <div className="input-group my-4 w-46" id='sr'>
                    {/* <span className="input-group-text">First and last name</span> */}
                    <input type="text"  name='search' value={search} onChange={event => setSearch(event.target.value)} className="form-control mx-3"/>
                    <input type="text"  name='replace' value={replace} onChange={event => setReplace(event.target.value)} className="form-control mx-3"/>
                    <button className="btn btn-primary" id='replace' onClick={replaceText}>Replace All</button>
                </div>
        </div>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2 className='mt-3'>Other Data Related to your text is</h2>
            <div>No. of words <b>{noOfWords()}</b> & characters <b>{text.length}</b> in your text</div>
            <div><b>{0.008 * text.split(' ').length}</b> minutes read</div>
            <h3 className='mt-2'>Preview</h3>
            <div>{text.length > 0?text:'Type something above in the text box in order to preview here.'}</div>
        </div>
        </>
)
}
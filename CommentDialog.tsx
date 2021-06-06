import React from "react";
import { render } from "react-dom";
import "./style.css";

export interface Commentdialogprops{
    onClose:()=>void;
    onSubmit:()=>void;
}

export default function CommentDialog(props:Commentdialogprops){
   
const [state, setState] = React.useState({value:''});

const handleChange=(event)=> {
    console.log(event.target);
    setState({value: event.target.value});
  }

const handleSubmit=(event)=> {
  
    alert(state.value);
    event.preventDefault();
  }

  return <div>

    <section>
    
    <header className="aui-dialog2-header">
              
              <h1 className="aui-dialog2-header-main">
                Ihr Kommentar
              </h1>
             
              <button
                  className="aui-close-button close-button"
                  type="button"
                  aria-label="close"
                  onClick={()=> props.onClose()}
                ></button>
            </header>
    
     <div className="aui-dialog2-content">
              <p>
                <textarea
                    className="textarea"
                    rows="10"
                    cols="67"
                    name="dialog-comment-input"
                    onChange={handleChange}
                  ></textarea>
              </p>
            </div>
    <footer className="aui-dialog2-footer">
             
              <div className="aui-dialog2-footer-actions">
                <button className="aui-button aui-button-primary send-button" onClick={()=> props.onSubmit(),
                handleSubmit}
                >Senden</button>
                <button className="aui-button aui-button-link close-button" onClick={()=> props.onClose()} >Abbrechen</button>
              </div>
              
              <div className="aui-dialog2-footer-hint">
                Schreiben Sie einen Kommentar.
              </div>
            </footer>
    
    </section>
   </div>

}



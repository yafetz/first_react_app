import React from "react";
import { render } from "react-dom";
import "./style.css";
import CommentDialog from "./CommentDialog";
interface AppProps {
}

export default function App(props: AppProps) {
  
  const [tasks, setTasks] = React.useState([
    {
      description: "Make the top bar green (#a0c52a)"
    },
    {
      description:
        "Create a react component (CommentDialog) with a textarea and two buttons (Send) and (Cancel)"
    },
    {
      description:
        "Open (CommentDialog) only when you click on the button (Write Comment)"
    },
    {
      description: "Close (CommentDialog) when you click on buttons (Cancel) or (Submit)"
    },
    {
      description:
        "Show the content of the textarea in an alert dialog, when you click on button (Submit)"
    }
  ]);

    const [currentState, setState] = React.useState(false);

    const CommentDialogState = currentState; 

    const dialog = currentState ?  <CommentDialog onClose={()=>{
          setState(false);

    }} onSubmit={()=>{
      setState(false);

    }}/> : null ;

  return (
    
    <div>
      {dialog}

      <button onClick={()=> setState(true)
      
      
      } className="aui-button aui-button-primary">Write Comment
      
      
      </button>

      <h3>Finish the following tasks:</h3>

      <ol>
        {tasks.map((task, key) => {
          return (
            <li key={key}>{task.description}</li>
          );
        })}
      </ol>
    </div>
  );
}

render(<App />, document.getElementById("root"));

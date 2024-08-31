
import "./button.css"

function Button(props){
    return (
        <button style={{backgroundColor: props.color}} type="button" className="btn btn-success">{props.title}</button>
    )
}

export default Button
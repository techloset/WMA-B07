export default function Button(props) {
    return (
        <a href="#" style={{backgroundColor: 'red'}} className="btn btn-primary">{props.title}</a>
    )
}
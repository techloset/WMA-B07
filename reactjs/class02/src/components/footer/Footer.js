import Input from '../input/Input'
export function Footer(props){
    console.log("props",props);
    
    return (
       <div>
        <h1 style={{textTransform: 'uppercase', borderRadius:5 }}>Footer</h1>
        <Input username={props.username}/>
        </div>
    
    )
}

export const userName = "John Doe"


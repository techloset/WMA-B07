
export default function TableItem(props) {
    // const onClickHanlder = (id) => {
    //  alert(id)        
    // }
    let mydata = "my data in child"
    return (
        <tr>
        
            <td>{props.item?.id}</td>
            <td>{props.item?.name}</td>
            <td>{props.item?.email}</td>
            <td>{props.item?.rollNo}</td>
            <td><button onClick={()=>props.onClickUpdateHandler(props.item)} style={{backgroundColor:'gray'}}>Update</button></td>
            <td><button onClick={()=>props.onClickDeleteHanlder(props.item.id)} style={{backgroundColor:'gray'}}>Delete</button></td>
            
        </tr>
    )
}

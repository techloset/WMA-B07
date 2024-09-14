import {useState } from 'react';
import TableItem from '../../components/tableItem/TableItem';
import { data as constantdata } from '../../constant/data';
import AddStudent from '../../components/addStudent/AddStudent';


export default function Home() {
    const [ data, setData] = useState([
        {
            id: 1,
            name: "Umer",
            email: "umer@gmail.com",
            rollNo: "1234",
            class: "BSCS",
        },
        {
            id: 2,
            name: "Ali",
            email: "ali@gmail.com",
            rollNo: "1235",
            class: "BSCS",
        },
        {
            id: 3,
            name: "Ahmed",
            email: "ahmed@gmail.com",
            rollNo: "1236",
            class: "BSCS",
        },
    ])

    let nums = [10, 20, 30, 40]
    let result = nums.map((num) => {
        return <div>sfda</div>
    })

    console.log("result", result);
     
    const onClickHanlder = (id) => {
        console.log("id in parent home", id);
        
       let  newdata =  data.filter(item => item.id !== id)
         setData(newdata)
        
    }

    const onAddHandler = (student) =>{
        console.log("student in home", student);
       setData([...data, {
              id: data.length + 1,
              name: student.name,
              email: student.email,
              rollNo: student.rollNo
       }]) 
    }

    return (
        <div>
            <AddStudent onAddHandler={onAddHandler} />
            <table>
                <tr>
                    <th>Id:</th>
                    <th>
                        Name:
                    </th>
                    <th>
                        Email:
                    </th>
                    <th>
                        Roll No:
                    </th>
                </tr>

                {data.map((item) => {
                    return (
                        <TableItem item={item} onClickHanlder={onClickHanlder} />
                    )
                })}

            </table>

        </div>
    )
}

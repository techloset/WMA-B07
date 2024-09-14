import { contacts } from "../../constant/contactInfo";

export default function Contact() {
    return (
        <div>
            <table>
                <tr>
                    <th>
                        Name:
                    </th>
                    <th>
                        Email:
                    </th>
                    <th>
                        Message:
                    </th>
                </tr>
                {contacts?.map((item, index) => {
                    return  <tr>
                    <td>
                        {item?.name}
                    </td>
                    <td>
                       {item?.email} </td>
                    <td>
                      {item?.message}
                    </td>
                </tr>
                })}
               
            </table>
        </div>
    )
}
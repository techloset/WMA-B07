import React, { useState, useEffect } from 'react'
import * as yup from "yup"

export default function AddStudent(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (props.currentStudent) {
      setName(props.currentStudent.name)
      setEmail(props.currentStudent.email)
      setRollNo(props.currentStudent.rollNo)
    }
  }, [props.currentStudent])

  console.log("props.currentStudent ==>>>", props.currentStudent);


  let schema = yup.object().shape({
    name: yup.string().max(10).min(3).required(),
    email: yup.string().email().required(),
    rollNo: yup.number().required().typeError("Must be a number"),
  })

  const onClickHandler = async () => {
    // console.log("name", name);
    // console.log("email", email);
    // console.log("rollNo", rollNo);



    let data = {
      name: name,
      email: email,
      rollNo: rollNo
    }
    try {
      let result = await schema.validate(data)
      console.log("result", result);
      setError('')
      props.currentStudent ? props.onUpdateHandler(data, props.currentStudent.id) :
        props.onAddHandler(data)
      setEmail('')
      setName('')
      setRollNo('')

    } catch (error) {
      console.log("error", error.toString());
      setError(error.toString())

    }



  }

  return (
    <div>
      <span style={{ backgroundColor: 'red', color: 'white' }}>{error}</span> <br />
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
      <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="text" placeholder="Enter Roll No" />
      <button onClick={onClickHandler} style={{ backgroundColor: "gray" }}>{props.currentStudent ? "Update" : "Add"} Student</button>
    </div>
  )
}

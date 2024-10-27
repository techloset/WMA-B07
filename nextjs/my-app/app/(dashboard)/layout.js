"use client"
export default function Dashboard({children}) {
  return (
    <div>
         {/* <Provider store=""> */}
        <h1>Dashboard</h1>
        {children}
        {/* </Provider> */}
    </div>
  )
}

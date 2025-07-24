import { useState } from "react"

function AllCar (props){


    let [data,setData] = useState(props.transData)

    console.log(data)


    return(
        <>
        <h1>My All Car are </h1>

        </>
    )
}

export default AllCar
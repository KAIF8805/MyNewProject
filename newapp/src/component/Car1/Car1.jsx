import { useState } from "react"
import AllCar from "../AllCar/AllCar"


function Car1(){


    // State in component:- State like as a variable which is use to manage the data.

    let carData = [

        {
            carName:"TATA Nexon",
            carColor:"White"

        },
        {
            carName:"Suzuki Fronx",
            carColor:"Black"
        },
        {
            carName:"Fortuner",
            carColor:"Grey"
        }
    ]

    let [data,setData] = useState(carData[0])

    let handleClick=()=>{

        setData(carData[1])

    }

    return(
        <>
        <AllCar transData = {carData}/>

        <h1>My First Car {data.carName}</h1>

        <button onClick={handleClick}>Secondary Car</button>
        <button >Show my third car</button>



        
        </>
    )
}

export default Car1
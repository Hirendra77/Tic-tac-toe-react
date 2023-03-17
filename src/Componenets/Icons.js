import { FaTimes, FaRegCircle, FaStore } from "react-icons/fa";


const Icons =({user_icon})=>{

    switch(user_icon){
        case "circle":
            return <FaRegCircle/>
         case "cross":
            return <FaTimes/>
            default:
                return  <FaStore/> 
    }
}
export default Icons; 
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "../App.css"

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

const val  =  {...localStorage}



const ValuesOfObject=Object.entries(val);
console.log("ValueofObj", ValuesOfObject[0])
console.log("ValueofObj", ValuesOfObject[1])
console.log("ValueofObj", ValuesOfObject[2])
console.log("ValueofObj", ValuesOfObject[3])
console.log("ValueofObj", ValuesOfObject[4])


const keys=Object.keys(val)
const Values=Object.values(val)


console.log("length", Object.keys(ValuesOfObject).length) 

console.log("values", Values)
console.log("keys", keys)

console.log("user", user)


  return (
    <>
      <div className="p-4 box mt-3 text-center">
       <b> Firebase Authentication Data </b><hr/>
       <br />

        {/* {user && user.uid} */}
        
          
           <table border="3">
             <thead >
             <tr>
               <th>keys</th>
               <th>Values</th>
               <th>User Uid</th>
               
             </tr>
             </thead>
             {ValuesOfObject.length>0 && ValuesOfObject.map((x,y)=>{

               return(
              <tbody>
             <tr>
               <td>{keys[y]}</td>
               <td>{Values[y]}</td>
               <td>{user.uid}</td>
              
             </tr>
             </tbody>
               )    })}
           </table>
          
    
       
       
        
        
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;

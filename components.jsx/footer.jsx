import React from 'react'
import schoolimage from '../styles/SCHOOL IMAGE.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import '../styles/footer.css'
export const  Footer=()=> {
  return (
    <div className='text-white' style={{backgroundColor:"#313131", padding:"5% 5% 5% 0px" }}>
    <div className='text-white' style={{backgroundColor:"#313131", display:"flex",justifyContent:"space-between"}}>
      <div id='display' style={{display:"flex",justifyContent:"center",width:"30%"}} ><img style={{display:"flex",justifyContent:"center",width:"100%"}} src={schoolimage} alt="" /></div>
     <div style={{width:"20%"}} id='display'>
      <h6>Courses</h6>
      
      <p>Primary Years Programme</p>
<p>Middle Years Programme</p>
<p>Diploma Programme</p>
     </div>
     <div style={{width:"20%"}} id='display'>
<h6>Resources</h6>
<p>Smart classes</p>
<p>Library</p>
<p>Sports </p>
<p>Auditoriums and Halls </p>


     </div>
     <div style={{width:"20%"}} id='display'>

     <h6>About Us</h6>
<p>Contact</p>
<p>Help/Support</p>
<p>FAQ</p>
<p>Terms and Conditions</p>
     </div>

     </div>

{/* second porcation */}


<div style={{paddingLeft:"5%"}}>

<hr className="border-gray-700 mt-8" />

{/* Footer Bottom Section */}
<br />
<div className="text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center mt-6 px-10" style={{display:"flex",justifyContent:"space-between"}}>
  <div className="flex space-x-6 mt-2 md:mt-0" style={{display:"flex",}}>
  <p id='display'>© 2024 Mahaveer Ramani. All rights reserved.</p>
    <div><a href="#" className="hover:underline" style={{color:"white",  textDecoration:"none" ,padding:"0px 15px"}}>Privacy Policy</a>
    <span className="text-gray-500">|</span>
    <a href="#" className="hover:underline"style={{color:"white", textDecoration:"none" ,padding:"0px 15px"}}>Terms of Service</a>
    <span className="text-gray-500">|</span>
    <a href="#" style={{color:"white", textDecoration:"none" ,padding:"0px 15px"}}>Cookies Settings</a>
  </div></div>
  <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400 text-lg">
    <FaFacebookF className="cursor-pointer hover:text-white" style={{margin:"0px 5px"}} />
    <FaInstagram className="cursor-pointer hover:text-white"  style={{margin:"0px 5px"}}/>
    <FaTwitter className="cursor-pointer hover:text-white" style={{margin:"0px 5px"}}/>
    <FaLinkedinIn className="cursor-pointer hover:text-white" style={{margin:"0px 5px"}}/>
  </div>
</div>

</div> 
    </div>
  )
}

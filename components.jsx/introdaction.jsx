import React from 'react'
import '../styles/introdaction.css'
import schoolimage from '../styles/school.jpg'
import navbar from '../styles/bar component.png'





export const Introdaction=()=> {
  return (
    <>
    <div id='greating'>
      <h2 id='h2'> Welcome to 
      <br />
      Vancouver International School
      </h2 > 
      <div id='bothssss'>  
<div id='ps'>



At Vancouver International School, we are committed to nurturing a global community of learners. Our school proudly offers a diverse and inclusive environment, ensuring that every student feels valued and supported. We believe that education goes beyond the classroom, and our holistic approach focuses on the academic, emotional, and social development of each student
<br />
<br />
Our rigorous and engaging curriculum is designed to challenge and inspire students. With dedicated faculty members who are experts in their fields, we foster a love of learning and critical thinking. Beyond academics, we provide a wide range of extracurricular activities, from arts and athletics to clubs and leadership opportunities, allowing students to explore their passions and develop new skills.
<br />
<br />

 We are dedicated to preparing our students to become innovative thinkers, compassionate leaders, and responsible global citizens. Graduates of Vancouver International School leave with the knowledge, skills, and values necessary to succeed in an ever-changing world. We invite you to become part of our vibrant community and embark on an educational journey that will shape your future and empower you to make a positive impact on the world.
</div>  
       <div id='imgdivv'>
        
         <img src={schoolimage} id='simage'style={{imageRendering:"crisp-edges"}} alt="loerjfndkjs ffskjgbfkjgnfkjgndfkjgndfjn" /> 
        </div>
</div>
  <button id='admision'>Admission</button>
    </div>
    <nav id='nav'>
<h5 id='awards'>Awards and Recognitions</h5>
<img src={navbar} id='navv' alt="pics" />



    </nav>
</>
  )
}

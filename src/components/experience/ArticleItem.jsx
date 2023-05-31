import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const ArticleItem = ({ text }) => {
   return (
     <article className="experience__details">
       <BsPatchCheckFill className='experience__details-icon'/>
         <div><h4>{text}</h4></div>
     </article>
   );
 };
 
 export default ArticleItem;
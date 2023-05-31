import React from 'react';
import {BiCheck} from 'react-icons/bi'

const ServiceListItem = ({text}) => {
   return (
      <li>
         <BiCheck className ="service__list-icon"/>
         <p>{text}</p>
      </li>
   )
}

export default ServiceListItem
import React from "react";
import './contactlist'
import './contactlist.css'

import ContactItem from './contactItems/contactitems'

const Contactlist = ({ list, onStarChange }) => {
  console.log('Contactlist=>', list);

  const item = list.map(item => {
    return(
     <ContactItem
     key = {item.id}
      name={item.name}
      address={item.address}
      avatar={item.avatar}
      gender={item.gender}
      phone={item.phone}
      email={item.email}
      />
    );
  });



  return (


    <ul className="list-group pull-down" id="contact-list">
      {item}
    </ul>

  );
}



export default Contactlist;

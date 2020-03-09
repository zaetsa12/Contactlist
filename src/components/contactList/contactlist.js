import React from "react";
import './contactlist'
import './contactlist.css'

import ContactItem from './contactItems/contactitems'

function Text() {
  return (
    

      <ul className="list-group pull-down" id="contact-list">
        <ContactItem />
      </ul>

  );
}

export default Text;

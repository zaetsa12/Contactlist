import React from "react";
import './contactlist'

function Text() {
  return (
    

    <div className="container">
      <li className="list-group-item">
        <div className="row w-100">

          <div className="col-12 col-sm-6 col-md-3 px-0">
            <img
              src="https://api.randomuser.me/portraits/men/10.jpg"
              alt="Seth Frazier"
              className="img-fluid rounded-circle d-block mx-auto"
            ></img>
          </div>

          <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span className="name lead">Seth Frazier</span>
            <br></br>
            <span
              className="fa fa-map-marker fa-fw text-muted"
              data-toggle="tooltip"
              title=""
              data-original-title="7396 E North St"
            ></span>
            <span className="text-muted">7396 E North St</span>
            <br></br>
            <span
              className="fa fa-phone fa-fw text-muted"
              data-toggle="tooltip"
              title=""
              data-original-title="(560) 180-4143"
            ></span>
            <span className="text-muted small">(560) 180-4143</span>
            <br></br>
            <span
              className="fa fa-envelope fa-fw text-muted"
              data-toggle="tooltip"
              title=""
              data-original-title="seth.frazier@example.com"
            ></span>
            <span className="text-muted small text-truncate">
              seth.frazier@example.com
            </span>
          </div>
          
        </div>
      </li>
    </div>
    
  );
}

export default Text;

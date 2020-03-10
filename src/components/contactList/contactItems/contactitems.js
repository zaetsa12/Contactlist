import React, { Component, Fragment } from "react";
import "./contactitems.css";

class ContactItem extends Component {
  state = {
    name: "Seth Fraziery",
    address: "Harm, Stepana Banderu Street",
    phone: "(097) 555-55-12",
    email: "seth@i.ua",
    avatar: "16",
    gender: "women",
    starEmpty: "far fa-star fa-1x",
    starFull: "fas fa-star fa-1x",
    b: "true",
    f: "false"
  };

  onRandomAvatar = () => {
    const avatar = Math.floor(Math.random() * Math.floor(99));
    this.setState({
      avatar: avatar
    });
  };

  Favorite = () => {
    //let element = document.getElementById("menu-icon");
    let starEmpty = "far fa-star fa-1x";
    let starFull = "fas fa-star fa-1x";
    const b = true;
    const f = false;

    if (b) {
      this.setState({
        starEmpty: starFull,
        f: b
      });
      //element.removeClassName(starEmpty);
      //element.addClassName(starFull);
      console.log(b);
    } else {
      //element.removeClassName(starFull);
      //element.addlassName(starEmpty);
      this.setState({
        starFull: starEmpty,
        b: f
      });
    }
  };

  render() {
    const {
      name,
      address,
      phone,
      email,
      avatar,
      gender,
      starEmpty,
      b
    } = this.state;
    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    //let starEmpty = "far fa-star fa-1x";

    return (
      <Fragment>
        <div>
          <li className="list-group-item">
            <div className="row w-100">
              <div className="col-12 col-sm-6 col-md-2 px-0">
                <img
                  src={URL}
                  alt={name}
                  className="img-fluid rounded-circle d-block mx-auto"
                ></img>
              </div>

              <div className="col-12 col-sm-6 col-md-5 text-center text-sm-left">
                <span className="name lead">{name}</span>
                <br></br>
                <span
                  className="fa fa-map-marker fa-fw text-muted"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="7396 E North St"
                ></span>
                <span className="text-muted">{address}</span>
                <br></br>
                <span
                  className="fa fa-phone fa-fw text-muted"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="(560) 180-4143"
                ></span>
                <span className="text-muted small">{phone}</span>
                <br></br>
                <span
                  className="fa fa-envelope fa-fw text-muted"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="seth.frazier@example.com"
                ></span>
                <span className="text-muted small text-truncate">{email}</span>
              </div>

              <div className="col-12 col-sm-6 col-md-5 fav">
                <button
                  className="btn btn-success"
                  onClick={this.onRandomAvatar}
                >
                  Random avatar
                </button>
                <span
                  id="menu-icon"
                  className={starEmpty}
                  aria-hidden={b}
                  onClick={this.Favorite}
                ></span>
                {/* <i className={starFull} aria-hidden="false"></i> */}
              </div>
            </div>
          </li>
        </div>{" "}
      </Fragment>
    );
  }
}

export default ContactItem;

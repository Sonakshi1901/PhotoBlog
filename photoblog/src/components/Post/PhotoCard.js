import React from "react"
import "./PhotoCard.css";
import image from "../../images/image1.jpeg";
import Avatar from "@material-ui/core/Avatar";

const PhotoCard = (props) => {
  return (
      <div className="PhotoCard">
        <div className="PhotoCard__header">
         <Avatar
           className="PhotoCard__avatar"
           alt= 'Username'
           src="/static/images/avatar/1.jpg"
         />
          <h3>{props.name}</h3>
        </div>
         <img className="PhotoCard__img" src={image}/>

        <div className="PhotoCard__info">
         <h5 className="PhotoCard__date">{props.date}</h5>
         <h4 className="PhotoCard__text">{props.caption}</h4>
        </div>
      </div>
  )
}

export default PhotoCard

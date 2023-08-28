import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function CustomImageAvatar({size, imgPath}) {

  const containerStyle = {
    width: `${size}px`,
    height: "auto",
    justifyContent: "center",
    marginTop: '10px',
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div className="avatar-container" style={containerStyle}>
      <Avatar
        alt="no image"
        sx= {{ width: size, height: size }}
        src={imgPath}/>
    </div>
  );
}
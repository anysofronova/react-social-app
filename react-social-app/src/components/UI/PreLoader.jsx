import React from "react";
import loader from "../../assets/img/preLoader.svg";

const PreLoader = () => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "38%",
  };
  return (
    <div style={style}>
      <img src={loader} alt="preloader" />{" "}
    </div>
  );
};

export default PreLoader;

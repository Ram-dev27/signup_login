import React from "react";

const HomePage = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location ='/login'
  };
  return (
    <>
      <div>HomePage</div>
      <button onClick={handleClick}>logout</button>
    </>
  );
};

export default HomePage;

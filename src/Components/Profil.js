import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Profil(props) {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  return (
    <div>
      My profile
      <button onClick={() => navigate("/")}>Go home</button>
    </div>
  );
}

export default Profil;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function footer() {
  return (
    <div className="footer">
      <p>
        This site is made with <FontAwesomeIcon icon={faCoffee} /> &{" "}
        <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a target = "_blank" rel="noopener noreferrer" href="https://github.com/Psarvesh1">Sarvesh Parab</a>.
      </p>
    </div>
  );
}

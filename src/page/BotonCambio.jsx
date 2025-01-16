import React, { useState } from "react";
import "../Service/index.css";

const BotonCambioTexto = () => {
    const [buttonText, setButtonText] = useState("Haz clic aquí para quitar estres");

    const handleClick = () => {
        setButtonText(buttonText === "Haz clic aquí para quitar estres" ? "Click de nuevo" : "Haz clic aquí para quitar estres");
    };

    return (

        <button
            className="item-button"
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
};

export default BotonCambioTexto;
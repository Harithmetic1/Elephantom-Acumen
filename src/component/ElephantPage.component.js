import React from "react";
import Breadcrumb from "./Breadcrumb.component";


const ElephantPage = ({ image, name, sex, note }) => {
    return(
        <>
            <div className="elephant-container" >
                <Breadcrumb name={name} />

                <div className="elephant-content-area">
                    <div className="elephant-image">
                        <img src={image} alt={name} />
                    </div>
                    <div className="elephant-details">
                        <h1>{name}</h1>
                        <p>{sex}</p>
                    </div>
                    <div className="elephant-notes">
                        <p>
                            {note}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElephantPage;
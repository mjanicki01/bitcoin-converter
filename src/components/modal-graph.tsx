import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import ReactDOM from "react-dom";


// rate={currency.rate_float} description={currency.description}
type ModalGraphProps = {
    currency: any;
    isShowing: any;
    hide: any;
    text: string;
}

const ModalGraph = ({ currency, isShowing, hide, text }: ModalGraphProps) => isShowing? ReactDOM.createPortal(
    <Fragment>
        <div className="modal-content">
        <button type="button" className="modal-close-button" onClick={hide}>
            <span>&times;</span>
          </button>
            <p>{text}</p>
        </div>
    </Fragment>, document.body
) : null;


export default ModalGraph
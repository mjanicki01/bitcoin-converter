import { Fragment } from "react";
import ReactDOM from "react-dom";
import Graph from "./graph";

// rate={currency.rate_float} description={currency.description}
type ModalGraphProps = {
    currency: any;
    isShowing: any;
    hide: any;
}

const ModalGraph = ({ currency, isShowing, hide }: ModalGraphProps) => isShowing ? ReactDOM.createPortal(
    
    <Fragment>
        <div className="modal-page-effect">
            <div className="modal-content">

                <h2>{currency.description}
                    <button type="button" className="modal-close-button" onClick={hide}>
                        &times;
                    </button>
                </h2>

                <div className="graph-container">
                    <div className="graph">
                        <Graph />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>, document.body
) : null;


export default ModalGraph
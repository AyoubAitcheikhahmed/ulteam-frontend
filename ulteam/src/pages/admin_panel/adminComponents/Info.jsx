import "./info.css"
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
function Info() {
    return (
        <div className="info">
            
            <div className="infoItem"/*widgets */>
                <span className="infoTitle">Total Product sales</span>
                <div className="infoNumberContainer">
                    <span className="number"> 6432 &euro;</span>
                </div>
            </div>
            <div className="infoItem"/*widgets */>
                <span className="infoTitle">Netto Total</span>
                <div className="infoNumberContainer">
                    <span className="number"> 4564 &euro; </span>
               
                </div>
            </div>
            <div className="infoItem"/*widgets */>
                <span className="infoTitle">Total Products</span>
                <div className="infoNumberContainer">
                    <span className="number"> 160</span>
                </div>
            </div>
        </div>
    )
}

export default Info

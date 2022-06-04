import "./footer.css";
export default function Footer() {
    return (
      <div className="footer-cont">
         <div className="footer">
         <p className="rights">© 2022 Lonely Planet. All rights reserved. No part of this site may be reproduced without our written permission.</p> 
         <select
            className="SelectValue"
            id="SelectValue1"
            name="Filter by type of place"
        >
            <option value="English">English</option>
            <option value="Russian">Pусский</option>
            <option value="Turkish">Türkçe</option>
            <option value="İtalian">İtaliano</option>
            <option value="Swedish">Svenska</option>
        </select>
        </div>
      </div>
    );
  }
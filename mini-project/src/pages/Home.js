import React from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Welcome,To our web Site </h2>
        <div className="prompt">
          <p>We are Diabi And Benhacine react js developer,create this app
           you can see <Link to={"/contact"}>Contact</Link> and <Link to={"/Blog"}>Blog</Link> page </p>
          
        </div>
      </div>

    </div>
  );
}

export default Home;

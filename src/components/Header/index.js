import React, { useState } from 'react';
import Nav from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="http://localhost:3000/react-succulant#about"
          >
            <span className="content is-large">Courtney Van Breda</span>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;

import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      {/* This part is the nav bar */}
      <div>
        <nav className="navbar">
          <div className="navbar_container">
            <a href="./" className="navbar_logo">
              CodeCollab
            </a>
          </div>
          <ul className="navbar_menu">
            <li className="navbar_item">
              <Link to="./about" className="navbar_links" id="about-page">
                About
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="./project" className="navbar_links" id="project-page">
                Projects
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="./contact" className="navbar_links" id="contact-page">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* End of the nav bar */}

      {/* the Outlet part is how Tanstack routes to the different pages*/}
      <Outlet />

      {/* this part is the footer */}
      <div className="footer">
        <div className="footer_container">
          <img className="footer_logo" alt="logoss" src="/codeLogo.png"></img>
        </div>

        <h1>Find us on our other socials!</h1>
        <ul className="footer_menu">
          <li className="footer_items">
            <a
              className="footer_links"
              href="https://www.instagram.com/umasscodecollab/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li className="footer_items">
            <a
              className="footer_links"
              href="https://github.com/supriyaahejib/personal-portfolio-template"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="footer_items">
            <a
              className="footer_links"
              href="https://www.linkedin.com/in/umasscodecollab/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>@UMass CodeCollab</p>
      </div>

      {/*end of the footer */}
    </React.Fragment>
  );
}

import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Footer extends Component {
  renderLinks = () => {
    const linkProperties = {
      activeClass: "no",
      spy: true,
      smooth: true,
      offset: -400,
      duration: 500,
    };

    return (
      <React.Fragment>
        <li>
          <Link to="history-section" {...linkProperties}>
            History
          </Link>
        </li>

        <li>
          <Link to="photos-section" {...linkProperties}>
            Photos
          </Link>
        </li>

        <li>
          <Link to="timeline-section" {...linkProperties}>
            Timeline
          </Link>
        </li>

        <li>
          <Link to="family-tree-section" {...linkProperties}>
            Tree
          </Link>
        </li>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <a href="https://icons8.com/icon/aXmBVxLw9HVP/tombstone"></a>
        <footer>
          <div className="made-by">
            <h1>Symor-Richaards Family Website</h1>
            <p>
              Made with <i className="fas fa-heart"></i> and excitement by{" "}
              <a href="" target="_blank">
                Kenny Hoft
              </a>{" "}
            </p>
          </div>
          <div className="recources">
            <h1>Recources Used</h1>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://react-bootstrap.netlify.app/components/modal/"
                >
                  Modals
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://react-bootstrap.netlify.app/components/alerts/#alerts"
                >
                  Alerts
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.npmjs.com/package/react-tooltip"
                >
                  Tooltips
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.npmjs.com/package/gsap">
                  On Scroll Animations
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="review">
            <h1>Review</h1>
            <ul>{this.renderLinks()}</ul>
          </div>
          <p className="copyright">
            © 2021 - {new Date().getFullYear()} Copyright:{" "}
            <a
              target="_blank"
              className="text-reset fw-bold"
              href="https://mdbootstrap.com/"
            >
              <i className="fas fa-info-circle"></i>
            </a>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

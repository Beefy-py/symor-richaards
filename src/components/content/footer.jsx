import React, { Component } from "react";
import { Link } from "react-scroll";
import { withTranslation } from "react-i18next";
import ChangeLan from "../changeLan";

class Footer extends Component {
  renderLinks = () => {
    const linkProperties = {
      activeClass: "no",
      spy: true,
      smooth: true,
      offset: -400,
      duration: 500,
    };

    const { t } = this.props;

    return (
      <React.Fragment>
        <li>
          <Link to="history-section" {...linkProperties}>
            {t("history-nav")}
          </Link>
        </li>

        <li>
          <Link to="photos-section" {...linkProperties}>
            {t("photos-nav")}
          </Link>
        </li>

        <li>
          <Link to="timeline-section" {...linkProperties}>
            {t("timeline-nav")}
          </Link>
        </li>

        <li>
          <Link to="family-tree-section" {...linkProperties}>
            {t("famtree-nav")}
          </Link>
        </li>
      </React.Fragment>
    );
  };

  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <a href="https://icons8.com/icon/aXmBVxLw9HVP/tombstone"></a>
        <footer>
          <div className="made-by">
            <h1>{t("big-text")}</h1>
            <p>
              {t("made-text1")} <i className="fas fa-heart"></i>{" "}
              {t("made-text2")}
              <a href="" target="_blank">
                Kenny Hoft
              </a>{" "}
            </p>
            <ChangeLan />
          </div>
          <div className="recources">
            <h1>{t("footer-used")}</h1>
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
            <h1>{t("footer-review")}</h1>
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

export default withTranslation()(Footer);

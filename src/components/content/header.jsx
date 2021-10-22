import React, { Component } from "react";
import { Link } from "react-scroll";
import ReactTooltip from "react-tooltip";
import { withTranslation } from "react-i18next";
import ChangeLan from "./../changeLan";

class Header extends Component {
  state = {
    navActive: false,
    showScrollBtn: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 600) {
      document.querySelector("nav").className = "nav-scrolled";

      this.setState({ showScrollBtn: true });
    } else {
      document.querySelector("nav").className = "";

      this.setState({ showScrollBtn: false });
    }
  };

  toggleNavBar = () => {
    this.setState({ navActive: !this.state.navActive });
  };

  renderLinks = () => {
    const linkProperties = {
      activeClass: "link-active",
      spy: true,
      smooth: true,
      offset: -400,
      duration: 500,
    };

    const { t } = this.props;

    return (
      <React.Fragment>
        <Link to="history-section" {...linkProperties}>
          <i className="fas fa-history"></i> {t("history-nav")}
          <div className="under-line"></div>
        </Link>

        <Link to="photos-section" {...linkProperties}>
          <i className="fas fa-images"></i> {t("photos-nav")}
          <div className="under-line"></div>
        </Link>

        <Link to="timeline-section" {...linkProperties}>
          <i className="fas fa-hourglass-start"></i> {t("timeline-nav")}
          <div className="under-line"></div>
        </Link>

        <Link to="family-tree-section" {...linkProperties}>
          <i className="fas fa-sitemap"></i> {t("famtree-nav")}
          <div className="under-line"></div>
        </Link>
      </React.Fragment>
    );
  };

  render() {
    const { navActive, showScrollBtn } = this.state;

    const { t } = this.props;

    return (
      <nav>
        <div className="content">
          <h1>
            <span>Symor</span> - Richaards
          </h1>
          <div className="links">
            {this.renderLinks()}
            {window.innerWidth > 780 && <ChangeLan />}
          </div>
          <button className="nav-btn" onClick={this.toggleNavBar}>
            {navActive ? (
              <i className="fas fa-caret-down"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
          <div
            className={navActive ? "dropdown-links active" : "dropdown-links"}
          >
            {this.renderLinks()}
            <ChangeLan />
          </div>
        </div>
        {showScrollBtn && (
          <React.Fragment>
            <ReactTooltip />
            <button
              data-tip={t("scroll-top")}
              data-place="left"
              className="scroll-to-top"
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default withTranslation()(Header);

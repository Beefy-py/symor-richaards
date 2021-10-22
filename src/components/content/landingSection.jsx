import React, { Component } from "react";
import { Link } from "react-scroll";
import { withTranslation } from "react-i18next";

class LandingSection extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="view" id="intro">
        <div className="page-bg">
          <div className="cta-info">
            <h1>
              {t("text1-cta")}
              <span> Symor-Richaards {t("text2-cta")}</span> <br />{" "}
              {t("text3-cta")}
              <span> {t("text4-cta")}</span>
            </h1>
            <hr />
            <button>
              <Link
                to="history-section"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                {t("button-cta")}
              </Link>
            </button>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#D4A373"
              fill-opacity="0.3"
              d="M0,160L20,149.3C40,139,80,117,120,106.7C160,96,200,96,240,106.7C280,117,320,139,360,154.7C400,171,440,181,480,192C520,203,560,213,600,192C640,171,680,117,720,122.7C760,128,800,192,840,202.7C880,213,920,171,960,154.7C1000,139,1040,149,1080,170.7C1120,192,1160,224,1200,197.3C1240,171,1280,85,1320,96C1360,107,1400,213,1420,266.7L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            ></path>
          </svg> */}
        </div>
      </div>
    );
  }
}

export default withTranslation()(LandingSection);

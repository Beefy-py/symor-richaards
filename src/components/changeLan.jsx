import React from "react";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

const ChangeLan = () => {
  const { i18n, t } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  const lan = i18n.language;

  return (
    <React.Fragment>
      <div
        className="btns languages"
        data-tip={t("change-lan")}
        data-place="bottom"
      >
        <button
          onClick={changeLanguage}
          className={`btn ${lan !== "en" ? "not-active" : ""}`}
          value="en"
        >
          En
        </button>
        <button
          onClick={changeLanguage}
          className={`btn ${lan !== "nl" ? "not-active" : ""}`}
          value="nl"
        >
          Nl
        </button>
      </div>
      <ReactTooltip />
    </React.Fragment>
  );
};

export default ChangeLan;

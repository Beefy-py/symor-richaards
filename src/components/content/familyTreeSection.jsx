import React, { useRef, useState } from "react";
import { useIntersection } from "react-use";
import Modal from "react-bootstrap/Modal";
import FamilyTree from "./familyTree";
import { useTranslation } from "react-i18next";

const FamilyTreeSection = ({ doIntersectionAnimation }) => {
  const [modalShow, setModalShow] = useState(false);

  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "-10px",
    threshold: 0.1,
  };

  const intersection = useIntersection(sectionRef, options);

  const sectionIds = {
    title: {
      title: "#family-tree-section",
      coords1: { x: 80 },
    },
  };

  doIntersectionAnimation(intersection, options, sectionIds, true);

  return (
    <section className="tree-section" id="family-tree-section" ref={sectionRef}>
      <FamilyTreeModal
        show={modalShow}
        setShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
      <h1>{t("famtree-title")}</h1>
      <hr />
      <p>
        {t("famtree-text")} <i>Alwin John Symor</i> {"&"}{" "}
        <i>Fredericka Henriëtte Elizabeth Richaards</i>
      </p>
      <button onClick={() => setModalShow(true)}>{t("view-btn")}</button>
    </section>
  );
};

function FamilyTreeModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      dialogClassName="modal-90w family-tree-modal"
      fullscreen={true}
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Symor - Richaard's FamilyTree
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FamilyTree />
      </Modal.Body>
    </Modal>
  );
}

export default FamilyTreeSection;

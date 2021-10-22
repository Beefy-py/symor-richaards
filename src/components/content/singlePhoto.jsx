import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CloseButton } from "react-bootstrap";
import { useAlert } from "react-alert";
import axios from "axios";
import apiURL from "./../../utils/apiUrl";
import { useTranslation } from "react-i18next";

const SinglePhoto = ({ photo }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [showImgInfo, setShowImgInfo] = React.useState(false);

  const { id, caption, image, date_added } = photo;

  return (
    <React.Fragment>
      <ImageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgId={id}
        imgSrc={image}
        imgCap={caption}
        added={new Intl.DateTimeFormat("en-GB", {
          dateStyle: "long",
          timeStyle: "short",
        }).format(new Date(date_added))}
        showImgInfo={showImgInfo}
        setShowImgInfo={setShowImgInfo}
      />

      <div
        className="single-photo"
        key={id}
        id="single-photo"
        onClick={() => setModalShow(true)}
      >
        <img src={image} alt={caption} />
      </div>
    </React.Fragment>
  );
};

function ImageModal(props) {
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [updateModalShow, setUpdateModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <DeletePhotoModal
        show={deleteModalShow}
        setShowModal={setDeleteModalShow}
        imgId={props.imgId}
        imgCap={props.imgCap}
      />
      <UpdatePhotoModal
        show={updateModalShow}
        setShowModal={setUpdateModalShow}
        imgId={props.imgId}
        imgSrc={props.imgSrc}
        imgCap={props.imgCap}
      />
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        dialogClassName="image-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div className="btn-bg">
            <button
              className="info-btn"
              onClick={() => props.setShowImgInfo(true)}
            >
              <i className="fas fa-info-circle"></i>
            </button>
            <CloseButton onClick={props.onHide} variant="white" />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.imgSrc} fluid />

          {props.showImgInfo && (
            <div className="img-info">
              <div className="top">
                <div className="btns">
                  <button
                    className="fas fa-trash"
                    onClick={() => setDeleteModalShow(true)}
                  ></button>

                  <button
                    className="fas fa-pen"
                    onClick={() => setUpdateModalShow(true)}
                  ></button>

                  <CloseButton
                    onClick={() => props.setShowImgInfo(false)}
                    variant="white"
                  />
                </div>

                <div className="date">{props.added}</div>
              </div>

              <div className="caption">
                {props.imgCap === "null" ? "" : <p> {props.imgCap}</p>}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

function DeletePhotoModal({ show, setShowModal, imgCap, imgId }) {
  const doPhotoDeletion = async (id) => {
    await axios
      .delete(apiURL + "photos/" + id)
      .catch((res) => console.log(res.response));

    window.location.reload();
  };

  const { t } = useTranslation();

  return (
    <Modal
      show={show}
      onHide={() => setShowModal(false)}
      dialogClassName="photo-delete-modal"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("del-img")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t("del-img-text1")} <strong>{t("del-img-text2")}</strong>{" "}
        {t("del-img-text3")}[<i>{imgCap}</i>] ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          {t("cancel")}
        </Button>
        <Button variant="danger" onClick={() => doPhotoDeletion(imgId)}>
          {t("delete")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function UpdatePhotoModal({ show, setShowModal, imgSrc, imgCap, imgId }) {
  const { t } = useTranslation();

  const [validated, setValidated] = React.useState(false);
  const [photo, setPhoto] = React.useState({ caption: "" });
  const [formErrors, setFormErrors] = React.useState({
    caption: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setValidated(true);

    let formData = new FormData();
    formData.append("caption", photo.caption);

    await axios
      .patch(apiURL + "photos/" + imgId, formData)
      .then((res) => setShowModal(false))
      .catch((res) => console.log(res.response));

    window.location.reload();
  };

  const handleChange = (event) => {
    event.preventDefault();
    const data = { ...photo };

    data[event.target.name] = event.target.value;

    if (event.target.name === "caption") {
      if (event.target.value.length >= 200)
        setFormErrors({
          caption: t("caption-error"),
        });
      else setFormErrors({ caption: "" });
    }

    setPhoto(data);
  };

  return (
    <Modal
      show={show}
      onHide={() => setShowModal(false)}
      dialogClassName="photo-update-modal"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("upd-img")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated}>
          <Form.Group className="mb-3">
            <Form.Label>{t("caption")}</Form.Label>
            {formErrors.caption && (
              <div className="error">
                {formErrors.caption}
                <i className="fas fa-exclamation-triangle"></i>
              </div>
            )}
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="caption"
              placeholder={imgCap}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          {t("cancel")}
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          {t("upd")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SinglePhoto;

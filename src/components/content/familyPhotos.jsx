import React, { Component, useState } from "react";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";
import SinglePhoto from "./singlePhoto";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactPaginate from "react-paginate";
import { useAlert } from "react-alert";
import { withTranslation, useTranslation } from "react-i18next";

class FamilyPhotos extends Component {
  componentDidMount() {
    this.htmlImagesData();
  }

  constructor(props) {
    super(props);
    this.photosRef = React.createRef();
    this.state = {
      offset: 0,
      photos: [],
      perPage: 6,
      currentPage: 0,
      modalShow: false,
    };
  }

  htmlImagesData() {
    axios.get(apiUrl).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const imagesData = slice.map((photo) => (
        <SinglePhoto key={photo.id} photo={photo} />
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        imagesData,
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.htmlImagesData();
      }
    );

    // scroll.scrollTo(1300, { duration: 500, delay: 1, smooth: false });
    this.photosRef.current.scrollIntoView();
  };

  getPageRange = () => {
    if (window.innerWidth <= 380) {
      return 1;
    }

    if (window.innerWidth <= 600) {
      return 3;
    }

    return 5;
  };

  render() {
    const { t } = this.props;

    return (
      <section
        className="gallery-section"
        id="photos-section"
        ref={this.photosRef}
      >
        {/* ref={sectionRef} */}
        <AddPhotoModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        <header>
          <h1>{t("gallery-title")}</h1>
          <button onClick={() => this.setState({ modalShow: true })}>
            {t("add-photo")}
          </button>
        </header>
        <div className="items">{this.state.imagesData}</div>
        <ReactPaginate
          previousLabel={<i className="fas fa-arrow-left"></i>}
          nextLabel={<i className="fas fa-arrow-right"></i>}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={this.getPageRange()}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </section>
    );
  }
}

function AddPhotoModal(props) {
  const [validated, setValidated] = useState(false);
  const [photo, setPhoto] = useState({ image: null, caption: null });
  const [formErrors, setFormErrors] = useState({ image: "", caption: "" });

  const alert = useAlert();
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!photo.image) {
      props.onHide();
      alert.show(t("photo-add-fail"));
      return;
    }

    setValidated(true);

    let formData = new FormData();
    formData.append("image", photo.image, photo.image.name);
    formData.append("caption", photo.caption);

    axios
      .post(apiUrl, formData)
      .then((res) => props.onHide())
      .catch((res) => console.log(res.response));

    window.location.reload();
  };

  const handleChange = (event) => {
    event.preventDefault();
    const data = { ...photo };

    if (event.target.name === "image") {
      data[event.target.name] = event.target.files[0];
    } else {
      data[event.target.name] = event.target.value;
    }

    if (event.target.name === "caption") {
      if (event.target.value.length >= 200)
        setFormErrors({
          image: "",
          caption: t("caption-error"),
        });
      else setFormErrors({ image: "", caption: "" });
    }

    setPhoto(data);
  };

  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="add-photo-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t("adding-photo")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{t("select-photo")}</Form.Label>
            <Form.Control
              type="file"
              required
              onChange={handleChange}
              name="image"
            />
          </Form.Group>
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
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="warning">
          {t("cancel")}
        </Button>
        <Button onClick={handleSubmit} variant="success">
          {t("add-photo")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default withTranslation()(FamilyPhotos);

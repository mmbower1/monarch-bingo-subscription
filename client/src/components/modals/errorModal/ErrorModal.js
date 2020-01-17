import React, { Component } from "react";
import Modal from "react-modal";
// import axios from "axios";

class ErrorModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    this.state.modalIsOpen = this.props.open;
    // this.setState({ modelIsOpen: true });
    // this.setState({ modalIsOpen });

    return (
      <Modal
        className="bg-modal"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        // gets rid of ERR: 'Please use `Modal.setAppElement(el)` or set `appElement={el}`
        appElement={document.getElementById("root")}
      >
        <div className="modal-content">
          <div className="close-modal" onClick={() => this.props.onClose()}>
            +
          </div>
          Thanks!
          <br />
          <br />
          <h6 className="error-modal-writing">You have already subscribed. <br /><br />Our mission is to use the most widely played games to help folks get accustomed to crypto. 
            We know it can be a daunting and crowded space, but we got you covered! At Bitcoin Bingo we aim to be more than a 
            lottery site or another crypto startup. <br /><br />Our goal is to show people how seamless it is to earn crypto by simply playing Bingo! See you soon.
            <br />
            <br />
            Cheers,
            <br />
            Bitcoin Bingo Team
            </h6>
        </div>
      </Modal>
    );
  }
}

export default ErrorModal;
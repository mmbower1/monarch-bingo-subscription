import React, { Component } from "react";
import Modal from "react-modal";
// import axios from "axios";

class SuccessModal extends Component {
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
    console.log('==> setState() before closing modal')
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
          Success!
          <br />
          <i className="fas fa-thumbs-up fa-2x"></i>
          <br />
          <h6 className="success-modal-writing">Thanks for signing up. :) We don't plan to spam with you emails, we simply want to keep you involved with what is 
            happening here at Bitcoin Bingo. <br /><br />We will be updating our website over the next weeks and our team will 
            be adding features and content we think you'll love! We also want to keep you informed about our first test game 
            which will be launching soon! Our mission is to use the most widely played games to help folks get accustomed to crypto. <br /><br />
            We know it can be a daunting and crowded space, but we got you covered! At Bitcoin Bingo we aim to be more than 
            a lottery site or another crypto startup. Our goal is to show people how seamless it is to earn crypto by simply playing Bingo. 
            We appreciate your support and interest.
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

export default SuccessModal;
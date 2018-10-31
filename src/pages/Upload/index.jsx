import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommonNav from 'Commons/CommonNav';
import MessageDiv from 'Commons/MessageDiv';
import FontLoading from 'Commons/FontLoading';
import updateUserAction from 'Actions/updateUserAction';
import messagesAction from 'Actions/messagesAction';
import imageUploadAction from 'Actions/imageUploadAction';
import defaultAvatar from '../../assets/img/user-avatar.jpg';

// style imports
import 'Styles/ride-offer-general';
import 'Styles/dashboard';
import 'Styles/upload';

class Upload extends Component {
  componentDidMount() {
    const { updateUser, history } = this.props;

    return updateUser(history);
  }

  state = {
    file: null,
    imagePreview: null
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(); //eslint-disable-line
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      this.setState({
        file,
        imagePreview: reader.result
      });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { processUpload, history } = this.props;
    const { file } = this.state;

    if (!file) {
      return this.updateStateMessages(['You have not chosen any file'], false);
    }

    const formData = new FormData(); /* eslint-disable-line */
    formData.append(
      'image', file
    );
    return processUpload(formData, history);
  }

  updateStateMessages = (array, bool) => {
    const { updateMessages } = this.props;
    // display messages
    updateMessages({ messages: array, isSuccess: bool });

    // clear messages
    return setTimeout(() => {
      updateMessages({ messages: [], isSuccess: false });
    }, 4000);
  }

  render() {
    const { isLoggedIn, user, message } = this.props;
    const { imgUrl } = user;
    const { imagePreview } = this.state;

    return (
      <div>
        <CommonNav isLoggedIn={isLoggedIn} user={user} />
        <MessageDiv message={message} />
        <div className="upload-div">
          <div className="upload-wrapper">
            <div className="image-preview-div">
              <div className="image-preview">
                <img src={imagePreview || imgUrl || defaultAvatar} alt="Preview" id="imagePreview" />
              </div>
            </div>
            <div className="image-upload-form">
              <form method="PUT" encType="multipart/form-data">
                <div className="uploader-wrapper">
                  <input type="file" name="image" onChange={this.handleChange} />
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="form-btn" id="submit" onClick={this.handleSubmit}>
                    Upload Image
                    <i className="fa fa-spinner fa-spin" id="spinner" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.arrayOf.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  message: PropTypes.shape.isRequired,
  user: PropTypes.shape.isRequired
};


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading,
  message: state.message,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: history => dispatch(updateUserAction(history)),
  processUpload: (userData, history) => dispatch(
    imageUploadAction(userData, history)
  ),
  updateMessages: messageObject => dispatch(messagesAction(messageObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);

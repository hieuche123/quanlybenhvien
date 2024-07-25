import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './About.scss'
class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
        <FormattedMessage id="homepage.media-talk-about-huynh-minh-duc" />
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 my-10">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/qVQlc9fTbfk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-about"
            ></iframe>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 my-10">
            <p>
                <FormattedMessage className="content-about-p" id="homepage.media-talk-about-huynh-minh-duc-content" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

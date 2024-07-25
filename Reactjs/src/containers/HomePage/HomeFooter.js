import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./Homefooter.scss"
class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 
          <FormattedMessage id="homepage.footer-infor" />
           {/* Lê Văn Hiểu. biết thêm thông tin, xin vui lòng truy cập facebook của tôi */}
          <a
            target="blank"
            href="https://www.facebook.com/hieu.che.1614460"
          >
            &#8594;<FormattedMessage id="homepage.footer-infor-click-here" /> &#8592;
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

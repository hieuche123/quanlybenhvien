// import React, {Component} from "react";
// import { Connect, connect } from "react-redux";
// import { FormattedMessage } from "react-intl";
// import { LANGUAGES } from "../../../utils";

// class LikeAndShare extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     initFacebookSDK() {
//         if(window.FB) {
//             window.FB.XFBML.parse();
//         }

//         let { language } = this.props;
//         let locale = language === LANGUAGES.VI ? 'vi_VN' : 'en_US';

//         window.fbAsyncInit = function() {
//             window.FB.init({
//                 appId : process.env.REACT_APP_FACEBOOK_APP_ID,
//                 cookie: true,
//                 xfbml: true,
//                 version: 'v2.5'
//             });
//         };
        
//         (function(d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0];
//             if(d.getElementsById(id)) return;
//             js = d.createElement(s); js.id = id;
//             js.src = `//connect.facebook.net/${locale}/sdk.js`;
//             fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'facebook-jssdk'));
//     }

//     componentDidMount() {
//         this.initFacebookSDK();
//     }
//     async componentDidUpdate(prevProps, prevState, snapshot) {
//         if(this.props.language !== prevProps.language){

//         }
//     }


//     render() {
//         let {dataHref}  = this.props;

//         return(
//             <>
//                 <div className="fb-like"
//                     data-href={dataHref}
//                     data-width=""
//                     data-layout="standard"
//                     data-action="like"
//                     data-size="small"
//                     data-share="true"
//                 > 
//                 </div>
//             </>
//         )
//     }
// }

// const mapstateToProps = state => {
//     return {
//         language: state.app.language,
//     };
// };

// const mapDispatchToProps = state => {
//     return {
//     };
// };

// export default connect(mapstateToProps, mapDispatchToProps)(LikeAndShare);
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Message from "./../components/Message";
function MessageContainer(props) {
  var { message } = props;
  return <Message message={message}></Message>;
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps, null)(MessageContainer);

import {
  sendMessage,
  updateNewMessageBody,
  deleteMessage,
} from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import connect from 'react-redux/lib/connect/connect';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    deleteMessage,
    updateNewMessageBody,
  }),
  WithAuthRedirect
)(Dialogs);

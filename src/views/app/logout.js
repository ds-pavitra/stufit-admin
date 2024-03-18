import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import { logoutUser } from 'redux/actions'; // Import the logoutUser action

const Logout = ({ logoutUserAction }) => {
  const history = useHistory(); // Access the history object

  const handleLogout = () => {
    // Dispatch the logoutUser action
    logoutUserAction(history);
  };
  
  useEffect(() => {
    // Call handleLogout when the component mounts
    handleLogout();
  }, [logoutUserAction]);

  // Return null since this component doesn't render anything visible
  return null;
};

export default connect(null, {
  logoutUserAction: logoutUser,
})(Logout);

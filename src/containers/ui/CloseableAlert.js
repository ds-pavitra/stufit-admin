import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CloseableAlert = ({ type, message, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Display the alert when a new message is received
    if (message) {
      setIsOpen(true);

      // Automatically close the alert after a certain time (e.g., 5000 milliseconds)
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
        if (onClose) {
          onClose();
        }
      }, 2000);

      // Cleanup the timeout on component unmount or if a new message is received
      return () => clearTimeout(timeoutId);
    }
    return () => {};
  }, [message, onClose]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`closeable-alert ${type} ${isOpen ? 'open' : 'closed'}`}>
      <span className="message">{message}</span>
      <button type="button" className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

CloseableAlert.propTypes = {
  type: PropTypes.oneOf(['success', 'failure']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

CloseableAlert.defaultProps = {
  onClose: () => {},
};

export default CloseableAlert;

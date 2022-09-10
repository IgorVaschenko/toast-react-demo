import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, PortalInsertionPointId }) => {
  const container = document.getElementById(PortalInsertionPointId);
  return ReactDOM.createPortal(children, container || document.body);
};

export default Portal

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  PortalInsertionPointId: PropTypes.string,
};

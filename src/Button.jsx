import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children,to }) {
      if(to){ return <Link to={to}>{children}</Link>}
  return (
    <>
      <button to={to} className="bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full transition-colors duration-400 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2">{children}</button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to:PropTypes.node
};

export default Button;

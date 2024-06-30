import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkButton({children,to}){
      return(
            <>
            <Link to={to} className="text-lg text-blue-400 hover:text-blue-700 hover:underline p-5">{children}</Link>
            </>
      )
}
LinkButton.propTypes = {
      children: PropTypes.node.isRequired,
      to:PropTypes.string.isRequired
    };
export default LinkButton;
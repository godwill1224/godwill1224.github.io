import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDInput
import MDInputRoot from "components/MDInput/MDInputRoot";

const SearchBox = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MDInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of MDInput
SearchBox.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MDInput
SearchBox.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SearchBox;

import React from 'react';
import PropTypes from 'prop-types';
import GlobalStylesM from '@mui/material/GlobalStyles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

/**
 * @uxpindocurl https://mui.com/material-ui/api/global-styles/
 * @uxpindescription Use the GlobalStyles component to add global styles that can be used with the "classes" property of components.
 */
function GlobalStyles(props) {
  // Function to recursively add !important to all style values
  const addImportantToStyles = (styles) => {
    if (!styles) return {};
    return Object.keys(styles).reduce((newStyles, key) => {
      const value = styles[key];

      if (typeof value === 'object') {
        // Recursively process nested objects (e.g., pseudo-selectors, media queries)
        newStyles[key] = addImportantToStyles(value);
      } else {
        // Append !important to style values
        newStyles[key] = `${value} !important`;
      }

      return newStyles;
    }, {});
  };

  return (
    <StyledEngineProvider injectFirst>
      <div // A visual aid for the designer to see in UXPin
        style={{
          width: '160px',
          color: 'white',
          textAlign: 'center',
          background: '#2E7D32',
          borderRadius: 10,
          padding: '20px',
        }}
      >
        <strong>GlobalStyles:</strong>
        <br />
        Please move this <br />
        marker offscreen
      </div>
      <GlobalStylesM styles={addImportantToStyles(props.styles)} />
    </StyledEngineProvider>
  );
}

GlobalStyles.propTypes = {
  /**
   * The global styles to inject.
   */
  styles: PropTypes.object,
};

export default GlobalStyles;

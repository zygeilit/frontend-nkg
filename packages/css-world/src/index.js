
import React, { Component } from 'react'

/**
 * General component description.
 */
export default class MyComponent extends Component {
  render () {
    return <h1>hello world</h1>
  }
}

MyComponent.defaultProps = {
  optionalBool: false
};

MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  optionalNode: PropTypes.node,

  optionalElement: PropTypes.element,

  optionalMessage: PropTypes.instanceOf(null),

  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(null)
  ]),

  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  requiredFunc: PropTypes.func.isRequired,

  requiredAny: PropTypes.any.isRequired,

  // customProp: function(props, propName, componentName) {
  //   if (!/matchme/.test(props[propName])) {
  //     return new Error(
  //       'Invalid prop `' + propName + '` supplied to' +
  //       ' `' + componentName + '`. Validation failed.'
  //     );
  //   }
  // },

  // customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
  //   if (!/matchme/.test(propValue[key])) {
  //     return new Error(
  //       'Invalid prop `' + propFullName + '` supplied to' +
  //       ' `' + componentName + '`. Validation failed.'
  //     );
  //   }
  // })
};
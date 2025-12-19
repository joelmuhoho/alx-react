import React from "react";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = `WithLogging${getDisplayName(WrappedComponent)}`;
    }
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }
    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(WrappedComponent)} is going to unmount`
      );
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;

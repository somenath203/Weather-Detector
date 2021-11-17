import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./LoadingSpinner";

class App extends React.Component {
  // alternate state
  state = { lat: null, errorMessage: "" }; // here, writing 'state' is equivalent to writing 'this.state' inside constructor().

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:- {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; // passing 'state' as 'props'.
    }

    return <Spinner message="Waiting For Location Request...." />;
  }

  componentDidUpdate() {
    console.log("My component was just updated. It rerendered.");
  }

  // here, render() is working like a helper function.
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

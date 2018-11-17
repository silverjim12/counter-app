import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }
}

export default Counter;

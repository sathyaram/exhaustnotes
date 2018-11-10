import React, { Component } from 'react';

class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <details className="plan-tool">
            <summary>What is this tool made with?</summary>
            Flexbox, and so on.
          </details>
          <details className="plan-tool">
            <summary>How can I interact with it?</summary>
            Because
            </details>
      </div>
    );
  }
}

export default Faq;
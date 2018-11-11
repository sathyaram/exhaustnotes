import React, { Component } from 'react';

import './Faq.css'

class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <details>
            <summary>What is this tool made with?</summary>
            <p>Flexbox, and so on.</p>
          </details>
          <details>
            <summary>How can I interact with it?</summary>
            <p>Because</p>
            </details>
      </div>
    );
  }
}

export default Faq;
// if h1 is clicked then copy to clipboard and display a message that it was copied
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function CopyToClipboard() {

  return (
    <div>
      <form>
        <textarea
          ref={textAreaRef}
          value="0x8E680EC7B09b2B553f6a8cA163B6a710741E6bfa"
        />
      </form>
      <div>
        <button onClick={copyToClipboard}>Copy</button>
        {copySuccess}
      </div>
    </div>
  );
}

import React from "react";

import { Button } from "react-bootstrap";
import './button.css';

export default function button({ type, text, onClickBtn }) {
  return (
    <div>
      <Button className={`btn-${type}`} onClick={onClickBtn}>{text}</Button>
    </div>
  );
}

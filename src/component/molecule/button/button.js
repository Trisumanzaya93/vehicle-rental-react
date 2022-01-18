import React from "react";

import { Button } from "react-bootstrap";
import './button.css';

export default function button({ type, text, onClickBtn,typeBtn }) {
  return (
    <div>
      <Button className={`btn-${type}`} onClick={onClickBtn} type={typeBtn}>{text}</Button>
    </div>
  );
}

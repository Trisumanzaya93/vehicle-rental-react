import React from "react";
import ButtonComponent from "../button/button";

export default function BeforeLogin ({onClickBtn,onClickBtn1}) {
  return (
    <div className="d-flex">
      <ButtonComponent type={"login"} text={"Login"} onClickBtn={onClickBtn} />
      <ButtonComponent
        type={"signup"}
        text={"Sign Up"}
        onClickBtn={onClickBtn1}
      />
    </div>
  );
}

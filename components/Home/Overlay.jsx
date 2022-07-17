import React from "react";
import s from "./overlay.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modalSlice);
  return (
    <div
      onClick={() => dispatch(toggleModal())}
      className={modal ? s.overlay : `${s.overlay} ${s.hide}`}
    ></div>
  );
};

export default Overlay;

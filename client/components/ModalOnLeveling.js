import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import Modal from "./Modal";

const ModalOnLeveling = () => {
  // state capturing user's current level
  // if user levels up
  // modal pops up
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  const user = useSelector((state) => state.singleUser);
  console.log("user info", user);
  const [currentLevel, setCurrentLevel] = useState(user.level);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </div>
  );
};

export default ModalOnLeveling;

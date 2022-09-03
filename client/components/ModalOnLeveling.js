import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import Modal from "./Modal";

const ModalOnLeveling = () => {
  // state capturing user's current level
  // if user levels up
  // modal pops up
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.singleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(true);
    dispatch(fetchSingleUser());
  }, [user.level]);

  console.log("user info", user);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Congrats! You leveled up to {user.level}!
      </Modal>
    </div>
  );
};

export default ModalOnLeveling;

"use client";
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
} from "reactstrap";

interface IModalMakerMaker extends ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  toggle: () => void;
  size?: "sm" | "md" | "lg" | "xl";
}
const ModalMaker = (props: IModalMakerMaker) => {
  const { isOpen, children, toggle, size = "md" } = props;
  return (
    <Modal size={size} isOpen={isOpen} toggle={toggle} centered>
      {children}
    </Modal>
  );
};

export default ModalMaker;

import type React from "react";
import { Modal, type ModalProps } from "react-bootstrap";

export interface CustomModalProps extends ModalProps {
  children: React.ReactElement;
  backdrop?: "static" | boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  backdrop = true,
  ...props
}) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      {...props}
      centered
      backdrop={backdrop}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;

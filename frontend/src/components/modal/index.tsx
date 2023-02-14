import { ReactNode } from "react";
import Container from "./style";
import { IoCloseOutline } from "react-icons/io5";

interface IModal {
  title: string;
  children: ReactNode;
}

const Modal = ({title, children}: IModal) => {
  return (
    <Container>
      <div className="card">
        <div className="title">
          {title}
          <IoCloseOutline size={24}/>
        </div>
        <div className="content">
          <div className="children">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Modal;

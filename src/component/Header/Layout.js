import NavBar from "./NavBar";
import Modal from "./Modal";
import { Fragment, useState } from "react";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <NavBar onOpenModal={openModal} />
      {isModalOpen && <Modal onCloseModal={closeModal} />}
    </Fragment>
  );
}

export default Layout;

"use client";
import Button from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Modal/Modal";
import React from "react";
import NameForm from "./_ModalPages/_NameForm/NameForm";
import ModalPages from "./_ModalPages/ModalPages";

export default function Home() {
  const [modalState, setModalState] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button onClick={() => setModalState(!modalState)}>Open the modal</Button>
      <Modal open={modalState} onClose={() => setModalState(false)}>
        <ModalPages closeModal={() => setModalState(false)} />
      </Modal>
    </main>
  );
}

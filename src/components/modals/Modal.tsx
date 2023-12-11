import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import React from 'react';
import tw, { styled } from 'twin.macro';

import ModalHeader from '@/components/modals/ModalHeader';
import useModal from '@/hooks/useModal';

const Component = () => {
  const { modal, closeModal } = useModal();
  const { isOpen, isDismissable, size, title, component } = modal;

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        size={size}
        backdrop="blur"
        hideCloseButton
        isDismissable={isDismissable}
        onClose={closeModal}
      >
        <ModalContent>
          <ModalHeader title={title}></ModalHeader>
          <ModalBody className="px-4 pt-0 pb-4">
            {component && component()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  ${tw`relative`};
`;
const Overlay = styled.div`
  ${tw`absolute top-0 left-0 w-screen h-screen border border-solid border-red-500 z-[50]`};
`;

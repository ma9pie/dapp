import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import React from 'react';

import ModalHeader from '@/components/modals/ModalHeader';
import useModal from '@/hooks/useModal';

const Component = () => {
  const { modal } = useModal();

  return (
    <Modal
      isOpen={modal.isOpen}
      size={modal.size}
      backdrop="blur"
      hideCloseButton
      isDismissable={false}
    >
      <ModalContent>
        <ModalHeader title={modal.title}></ModalHeader>
        <ModalBody className="px-4 pt-0 pb-4">
          {modal.component && modal.component()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Component;

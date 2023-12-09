import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import React, { useState } from 'react';

import { ModalProps } from '@/types';

const Component = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      backdrop="blur"
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
        <ModalBody className="mb-2">
          {props.component && props.component()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Component;

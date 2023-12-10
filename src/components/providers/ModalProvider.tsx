import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

import Modal from '@/components/modals/Modal';

type Props = {
  children: ReactNode;
};

const ModalProvider = ({ children }: Props) => {
  return (
    <Container>
      <Container id="modal-manager">
        <Modal></Modal>
      </Container>
      {children}
    </Container>
  );
};

export default ModalProvider;

const Container = styled.div``;

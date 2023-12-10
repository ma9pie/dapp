import { useAtom } from 'jotai';

import { modalAtom } from '@/states';
import { ModalProps } from '@/types';

export default function useModal() {
  const [modal, setModal] = useAtom(modalAtom);

  const openModal = (props: ModalProps) => {
    setModal({ ...props, isOpen: true });
  };

  const closeModal = () => {
    setModal({ isOpen: false });
  };

  return {
    modal,
    openModal,
    closeModal,
  };
}

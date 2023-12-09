import { useCallback, useContext } from 'react';

import { ModalContext } from '@/components/providers/ModalProvider';
import { ModalProps, Modals } from '@/types';
import { createUid } from '@/utils';

let tmpModals: Modals;
const DELAY = 200; // modal unmount delay

export default function useModal() {
  const { modals, setModals } = useContext(ModalContext);
  tmpModals = modals;

  const openModal = (props: ModalProps) => {
    const hashMapA: Map<string, ModalProps> = new Map(tmpModals);
    props.id = props.id || createUid();
    props.isOpen = true;
    props.createdAt = new Date().getTime();
    props.onRequestClose = async () => {
      const hashMapB = new Map(hashMapA);
      props.isOpen = false;
      if (props.id) {
        hashMapB.set(props.id, props);
        setModals(hashMapB);
        setTimeout(() => {
          hashMapB.delete(props.id!);
          setModals(new Map(hashMapB));
        }, DELAY);
      }
    };
    hashMapA.set(props.id, props);
    setModals(hashMapA);
  };

  const closeModal = (id?: string) => {
    const hashMap: Map<string, ModalProps> = new Map(tmpModals);
    if (id) {
      const props = hashMap.get(id);
      if (props) {
        props.isOpen = false;
        hashMap.set(id, props);
        setModals(hashMap);
        setTimeout(() => {
          hashMap.delete(id);
          setModals(new Map(hashMap));
        }, DELAY);
      }
    }
    // id가 없을 경우 가장 최근에 띄워진 모달의 id로 closeModal 실행
    else {
      const _id = getRecentModalId();
      if (_id) closeModal(_id);
    }
  };

  const changeModal = (props: ModalProps) => {
    closeModal();
    setTimeout(() => {
      openModal(props);
    }, DELAY);
  };

  // 가장 최근의 modal id 조회
  const getRecentModalId = useCallback(() => {
    const hashMap: Map<string, ModalProps> = new Map(tmpModals);
    const arr = Array.from(hashMap.values()).sort(
      (a: ModalProps, b: ModalProps) => {
        const createdAtA = a.createdAt || 0;
        const createdAtB = b.createdAt || 0;
        return createdAtB - createdAtA;
      }
    );
    if (arr.length === 0) return null;
    return arr[0].id;
  }, []);

  return {
    openModal,
    closeModal,
    changeModal,
  };
}

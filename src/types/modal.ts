export interface ModalProps {
  id?: string;
  createdAt?: number;
  isOpen?: boolean;
  title?: string;
  message?: string;
  top?: string;
  left?: string;
  padding?: string;
  height?: string;
  cancleBtnText?: string;
  confirmBtnText?: string;
  component?: () => JSX.Element;
  onRequestClose?: () => void;
  onRequestConfirm?: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}
export type Modals = Map<string, ModalProps>;

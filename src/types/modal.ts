export interface ModalProps {
  isOpen?: boolean;
  isDismissable?: boolean;
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full';
  title?: string;
  component?: () => JSX.Element;
}
export type Modals = Map<string, ModalProps>;

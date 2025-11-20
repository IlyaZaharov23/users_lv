export type ModalWrapperProps = {
  children: React.ReactNode;
  open: boolean;
  title: string;
  actionBtnTitle: string;
  onClose: () => void;
  onSave: () => void;
};

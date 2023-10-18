import { renderImperatively } from '@hudiemon/utils';
import { Modal, ModalProps } from './Modal';

export type ModalOpenProps = Omit<
  ModalProps,
  'open' | 'destroyOnClose' | 'forceRender'
>;

export type ModalOpenHandler = {
  close: () => void;
};

export const closeFnSet = new Set<() => void>();

export function open(props: ModalOpenProps) {
  const handler: ModalOpenHandler = renderImperatively(
    <Modal
      {...props}
      onCancel={(e) => {
        handler.close();
        props.onCancel?.(e);
      }}
      afterClose={() => {
        closeFnSet.delete(handler.close);
        props.afterClose?.();
      }}
    />,
  );
  closeFnSet.add(handler.close);
  return handler;
}

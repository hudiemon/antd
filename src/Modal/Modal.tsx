import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import classnames from 'classnames';

export type ModalProps = AntModalProps;
export const Modal = (props: ModalProps) => {
  const { className: propsClassName } = props;

  return (
    <AntModal
      footer={null}
      {...props}
      className={classnames('hudiemon-modal', propsClassName)}
    />
  );
};

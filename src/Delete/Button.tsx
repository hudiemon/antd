import { DeleteOutlined } from '@ant-design/icons';
import {
  Button as AntButton,
  ButtonProps as AntButtonProps,
  ModalFuncProps,
} from 'antd';
import confirm from './confirm';

type ButtonProps = AntButtonProps & {
  confirmProps?: ModalFuncProps;
};
const Button = (props: ButtonProps) => {
  const { confirmProps = {}, ...buttonProps } = props;
  return (
    <AntButton
      danger
      icon={<DeleteOutlined />}
      {...buttonProps}
      onClick={() => confirm(confirmProps)}
    >
      删除
    </AntButton>
  );
};

export default Button;

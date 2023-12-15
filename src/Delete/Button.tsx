import { DeleteOutlined } from '@ant-design/icons';
import { isPromise } from '@hudiemon/utils';
import {
  Button as AntButton,
  ButtonProps as AntButtonProps,
  message,
  ModalFuncProps,
} from 'antd';
import confirm from './confirm';

type ButtonProps = AntButtonProps & {
  confirmProps?: ModalFuncProps;
  request?: () => Promise<void>;
};
const Button = (props: ButtonProps) => {
  const { confirmProps, request, ...buttonProps } = props;
  return (
      <AntButton
          danger
          icon={<DeleteOutlined />}
          {...buttonProps}
          onClick={() =>
              confirm({
                ...confirmProps,
                onOk: async () => {
                  if (confirmProps?.onOk) {
                    const promise = confirmProps?.onOk();
                    if (isPromise(promise)) {
                      try {
                        await promise;
                      } catch (e) {
                        throw e;
                      }
                    }
                  }
                  if (request) {
                    const promise = request();
                    if (isPromise(promise)) {
                      try {
                        await promise;
                        message.success('删除成功');
                      } catch (e) {
                        throw e;
                      }
                    }
                  }
                },
              })
          }
      >
        删除
      </AntButton>
  );
};

export default Button;

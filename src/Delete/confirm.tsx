import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, ModalFuncProps } from 'antd';

const confirm = (props: ModalFuncProps) => {
  Modal.confirm({
    title: '确认删除吗？',
    content: '删除后不可恢复，请谨慎操作',
    icon: <ExclamationCircleFilled />,
    okType: 'danger',
    ...props,
  });
};

export default confirm;

/**
 * title: 函数式调用
 * description: 函数式调用抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
 */
import { Button, Modal } from '@hudiemon/antd';

const Demo1 = () => {
  return (
    <Button
      onClick={() => {
        Modal.open({
          title: 'Function Modal',
          children: (
            <div>
              <Modal.Body>1231313</Modal.Body>
              <Modal.Footer>
                <Button>123</Button>
                <Button>456</Button>
              </Modal.Footer>
            </div>
          ),
        });
      }}
    >
      Open
    </Button>
  );
};

export default Demo1;

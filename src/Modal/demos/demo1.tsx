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
              <Modal.Body>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
                <div>1231313</div>
              </Modal.Body>
              <Modal.Footer>
                <Button>取消</Button>
                <Button type={'primary'}>确认</Button>
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

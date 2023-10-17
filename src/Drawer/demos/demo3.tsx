/**
 * title: 函数式调用
 * description: 函数式调用抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
 */
import { Button, Drawer } from '@hudiemon/antd';

const Demo3 = () => {
  return (
    <Button
      onClick={() => {
        Drawer.open({
          title: 'Function Drawer',
          children: (
            <>
              <Drawer.Body>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
                <div>123123123</div>
              </Drawer.Body>
              <Drawer.Footer>
                <Button>123</Button>
                <Button>456</Button>
              </Drawer.Footer>
            </>
          ),
        });
      }}
    >
      Open
    </Button>
  );
};

export default Demo3;

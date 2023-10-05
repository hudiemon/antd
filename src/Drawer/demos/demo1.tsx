/**
 * title: 函数式调用
 * description: 函数式调用抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
 */
import {Button, Drawer} from "@hudiemon/antd"

const Demo1 = () => {
  return <Button onClick={() => {
    Drawer.open({
      title: "Function Drawer"
    })
  }}>Open</Button>
}

export default Demo1

/**
 * title: 多层抽屉
 * description: 在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。
 */
import {Button, Drawer} from "@hudiemon/antd"
const Demo2 = () => {
  return <Button onClick={() => {
    Drawer.open({
      title: "Multi-level drawer",
      children: (
        <Button type="primary" onClick={() => Drawer.open({title: "Two-level Drawer"})}>
          Two-level drawer
        </Button>
      )
    })
  }}>Open drawer</Button>
}

export default Demo2;

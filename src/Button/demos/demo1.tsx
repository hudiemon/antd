import {Button} from "@hudiemon/antd"
import {sleep} from "@hudiemon/antd/utils";

const Demo1 = ()=>{
  return <Button loading={"auto"} onClick={async ()=>{
    await sleep(2000)
  }}>loading="auto"</Button>
}

export default Demo1

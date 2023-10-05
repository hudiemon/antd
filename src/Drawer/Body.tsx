import {NativeProps, withNativeProps} from "../utils/withNativeProps";

type BodyProps = {
  children?: React.ReactNode
} & NativeProps
export const Body = (props: BodyProps) => {
  return withNativeProps(props, <div
    className={"hudiemon-drawer-body"}>{props.children}</div>)
}

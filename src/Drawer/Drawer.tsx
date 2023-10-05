import {useEffect} from "react";
import classnames from 'classnames'
import {Drawer as AntDrawer, DrawerProps as AntDrawerProps} from 'antd'

export type DrawerProps = AntDrawerProps & {
  afterClose?: () => void;
}
const batchUpdateDrawersStyle = (open?: boolean) => {
  const nodeList = Array.from(
    document.getElementsByClassName('ant-drawer-open'),
  ) as HTMLElement[];
  const len = nodeList.length;
  nodeList.forEach((node: HTMLElement, index) => {
    let steps = len - (index + 1);
    if (open === false) steps = len - index - 1;
    node.style.transform = `translateX(-${180 * steps}px)`;
  });
};

export const Drawer = (props: DrawerProps) => {
  const {
    afterOpenChange: propsAfterOpenChange,
    afterClose: propsAfterClose,
    className: propsClassName
  } = props;
  useEffect(() => {
    batchUpdateDrawersStyle(props.open)
  }, [props.open])
  return (
    <AntDrawer {...props}
               className={classnames("hudiemon-drawer", propsClassName)}
               afterOpenChange={(open) => {
                 propsAfterOpenChange?.(open);
                 !open && propsAfterClose?.();
               }}/>
  );
};

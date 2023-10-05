import {Select as AntSelect, SelectProps as AntSelectProps} from 'antd'
import {Drawer} from '@hudiemon/antd';
import {Tree} from "@hudiemon/antd/TreeSelect/Tree";

type SelectProps = Omit<AntSelectProps, 'open'> & {}
export const Select = (props: SelectProps) => {
  const {placeholder: propsPlaceholder = "请选择"} = props;
  return (
    <AntSelect {...props}
               open={false}
               placeholder={propsPlaceholder}
               onClick={() => {
                 Drawer.open({
                   title: propsPlaceholder,
                   children: <Tree {...props}/>
                 })
               }}/>
  );
};

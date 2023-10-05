import {Tree as AntTree, Input,Button} from 'antd';
import {Drawer} from '@hudiemon/antd'
import {useMemo, useState} from "react";
import type {DataNode} from 'antd/es/tree';
import flattenDeep from "lodash/flattenDeep"

export const Tree = (props) => {
  const {treeData: propsTreeData} = props;
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    const loop = (data: DataNode[], parentKey?: React.Key) =>
      data.reduce((result: any[], item) => {
        if (item.title?.indexOf(value) > -1 && parentKey) {
          result.push(parentKey)
        }
        if (item.children) {
          result.push(loop(item.children, item.key))
        }
        return result;
      }, []);
    setExpandedKeys(flattenDeep(loop(propsTreeData)));
    setSearchValue(value);
    setAutoExpandParent(true);
  };
  const treeData = useMemo(() => {
    const loop = (data: DataNode[]): DataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return {title, key: item.key, children: loop(item.children)};
        }

        return {
          title,
          key: item.key,
        };
      });

    return loop(propsTreeData);
  }, [searchValue]);
  return (
    <>
      <Drawer.Body>
        <Input.Search onChange={onChange}
                      placeholder="请输入搜索内容"
                      style={{marginBottom: 8}}/>
        <AntTree multiple
                 checkable
                 selectable={false}
                 onExpand={onExpand}
                 treeData={treeData}
                 expandedKeys={expandedKeys}
                 autoExpandParent={autoExpandParent}/>
      </Drawer.Body>
      <Drawer.Footer>
        <Button>取消</Button>
        <Button type={"primary"}>确定</Button>
      </Drawer.Footer>
    </>
  );
};

import {Button as AntButton} from 'antd'
import type {ButtonProps as AntButtonProps} from 'antd'
import {useState} from "react";
import {isPromise} from '../utils'

export type ButtonProps = Omit<AntButtonProps, "loading" | "onClick"> & {
  loading?: boolean | 'auto';
  onClick?: (
    event: React.MouseEvent<HTMLElement>
  ) => void | Promise<void> | unknown
}
export const Button = (props: ButtonProps) => {
  const {onClick: propsClick, loading: propsLoading, ...remainProps} = props;
  const [innerLoading, setInnerLoading] = useState(false)
  const loading = propsLoading === 'auto' ? innerLoading : propsLoading
  return (
    <AntButton {...remainProps} loading={loading} onClick={async (e) => {
      if (!propsClick) return
      const promise = propsClick(e)
      if (isPromise(promise)) {
        try {
          setInnerLoading(true)
          await promise
          setInnerLoading(false)
        } catch (e) {
          setInnerLoading(false)
          throw e
        }
      }
    }}/>
  );
};


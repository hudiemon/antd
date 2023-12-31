import React from 'react';
import {NativeProps, withNativeProps} from '@hudiemon/utils';

type FooterProps = {
  children?: React.ReactNode
} & NativeProps
export const Footer = (props: FooterProps) => {
  return withNativeProps(props, <div className={"hudiemon-drawer-footer"}>{props.children}</div>)
};

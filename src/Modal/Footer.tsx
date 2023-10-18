import { NativeProps, withNativeProps } from '@hudiemon/utils';
import React from 'react';

type FooterProps = {
  children?: React.ReactNode;
} & NativeProps;
export const Footer = (props: FooterProps) => {
  return withNativeProps(
    props,
    <div className={'hudiemon-modal-footer'}>{props.children}</div>,
  );
};

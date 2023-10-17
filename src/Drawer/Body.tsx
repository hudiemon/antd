import { NativeProps, withNativeProps } from '@hudiemon/utils';

type BodyProps = {
  children?: React.ReactNode;
} & NativeProps;
export const Body = (props: BodyProps) => {
  return withNativeProps(
    props,
    <div className={'hudiemon-drawer-body'}>
      <div className={'hudiemon-drawer-body-content'}>{props.children}</div>
    </div>,
  );
};

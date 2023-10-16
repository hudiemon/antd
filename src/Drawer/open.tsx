import React from 'react'
import {Drawer, DrawerProps} from './Drawer'
import {renderImperatively} from '@hudiemon/utils'

export type DrawerOpenProps = Omit<
  DrawerProps,
  'open' | 'destroyOnClose' | 'forceRender'
>

export type DrawerOpenHandler = {
  close: () => void
}

export const closeFnSet = new Set<() => void>()

export function open(props: DrawerOpenProps) {
  const handler: DrawerOpenHandler = renderImperatively(
    <Drawer
      {...props}
      afterClose={() => {
        closeFnSet.delete(handler.close)
        props.afterClose?.()
      }}
    />
  )
  closeFnSet.add(handler.close)
  return handler
}

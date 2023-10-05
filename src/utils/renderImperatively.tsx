import React, {
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { renderToBody } from './renderToBody'

type ImperativeProps = {
  open?: boolean
  onClose?: () => void
  afterClose?: () => void
}

type TargetElement = ReactElement<ImperativeProps>

export type ImperativeHandler = {
  close: () => void
  replace: (element: TargetElement) => void
}

export function renderImperatively(element: TargetElement) {
  const Wrapper = React.forwardRef<ImperativeHandler>((_, ref) => {
    const [open, setOpen] = useState(false)
    const closedRef = useRef(false)
    const [elementToRender, setElementToRender] = useState(element)
    const keyRef = useRef(0)
    useEffect(() => {
      if (!closedRef.current) {
        setOpen(true)
      } else {
        afterClose()
      }
    }, [])
    function onClose() {
      closedRef.current = true
      setOpen(false)
      elementToRender.props.onClose?.()
    }
    function afterClose() {
      unmount()
      elementToRender.props.afterClose?.()
    }
    useImperativeHandle(ref, () => ({
      close: onClose,
      replace: element => {
        keyRef.current++
        elementToRender.props.afterClose?.()
        setElementToRender(element)
      },
    }))
    return React.cloneElement(elementToRender, {
      ...elementToRender.props,
      key: keyRef.current,
      open,
      onClose,
      afterClose,
    })
  })
  const wrapperRef = React.createRef<ImperativeHandler>()
  const unmount = renderToBody(<Wrapper ref={wrapperRef} />)
  return {
    close: async () => {
      if (!wrapperRef.current) {
        // it means the wrapper is not mounted yet, call `unmount` directly
        unmount()
      } else {
        wrapperRef.current?.close()
      }
    },
    replace: element => {
      wrapperRef.current?.replace(element)
    },
  } as ImperativeHandler
}

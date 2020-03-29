import * as React from 'react'
import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'

export function ButtonTransparent(props: ButtonProps) {
  return (
    <Button {...props} className={props.className + ' btn-transparent-custom'}>
      {props.children}
    </Button>
  )
}

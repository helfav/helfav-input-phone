import * as React from 'react'
import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'

export function ButtonPrimary(props: ButtonProps) {
  return (
    <Button {...props} className={props.className + ' btn-primary-custom'}>
      {props.children}
    </Button>
  )
}

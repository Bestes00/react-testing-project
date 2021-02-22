import React from 'react'
import './Stepper.scss'
import 'antd/dist/antd.css'

import { Button, InputNumber } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const Stepper = ({ increment, decrement, onStepperChange }) => {

  const getColor = (value) => {
    if (value > 10) return 'orange'
    if (value > 100) return 'red'
  }


  return (
    <div className='stepper'>
      <Button onClick={decrement} className='stepper-button' size='large'>
          <MinusOutlined />
        </Button>
      <InputNumber 
        className={`stepper-input ${getColor}`}
        min={0} 
        max={100} 
        defaultValue={1}
        onChange={(value) => onStepperChange(value)}
      />
        <Button onClick={increment} className='stepper-button' size='large'>
          <PlusOutlined />
        </Button>
    </div>
  )
}

export default Stepper
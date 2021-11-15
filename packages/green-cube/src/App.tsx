import React, { useEffect } from 'react'
import Circle from './three'

interface IProps {

}

const App: React.FC<IProps> = () => {
  useEffect(() => {
    new Circle('.canvas-container')
    // c.animate()
  }, [])
  return (<div className='canvas-container'>

  </div>)
}

export default React.memo(App)
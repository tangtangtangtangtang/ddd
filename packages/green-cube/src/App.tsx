import React, { useEffect } from 'react'
import Circle from './three'
import S from './style.module.scss'

interface IProps {

}

const App: React.FC<IProps> = () => {
  useEffect(() => {
    const c = new Circle()
    c.animate()
  }, [])
  return (<div className={S.container}>

  </div>)
}

export default React.memo(App)
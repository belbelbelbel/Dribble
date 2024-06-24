import { Header } from './Header'
import { Content1 } from './Context1'
import { Content2 } from './Context2'
import { Context3 } from './Context3'

export const Home = () => {
  return (
    <div className='flex flex-col h-scremen'>
      <Header />
      <Content1 />

      <Content2 />
      <div className='mt-[0vw]'>
        <Context3 />
      </div>

    </div>
  )
}

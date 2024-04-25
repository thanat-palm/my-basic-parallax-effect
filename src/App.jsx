import { useState } from 'react'
import { Parallax ,ParallaxLayer } from '@react-spring/parallax'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="con">
      <Parallax pages={4}>
        <ParallaxLayer
          speed={0.5}
          style={{
            backgroundImage: 'url(https://i.pinimg.com/564x/a4/cf/aa/a4cfaa180d349dbe11c214f53f7ee43e.jpg)',
            
            top:'0',
            left:'0',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >

        </ParallaxLayer>

        <ParallaxLayer
          factor={0.2}
          speed={0.05}
          onClick={() => 
            ref.current.scrollTo(3)
          }
        >
          <h2>HELLO WORLD</h2>
        </ParallaxLayer>

        <ParallaxLayer
          
          sticky={{start:0, end: 3}}
          style={{
            backgroundImage: 'url(https://cdn.jsdelivr.net/gh/fireship-io/skydiving-cat-parallax@837be6594ffbd6ec8c4f6ff647572ccf5ee8dd02/src/cat.gif)',
            backgroundPosition: 'center',
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundImage: 'url(https://i.pinimg.com/564x/9c/b6/00/9cb60009224bd45e231f5894437c73ed.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top:'0',
            left:'0'
          }}
        >

        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          factor={3}
          onClick={() => 
            ref.current.scrollTo(0)
          }
        >
          <h2>BYE BYE WORLD</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App

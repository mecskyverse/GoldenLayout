//For modular design importing different components and hooks
import { useState } from 'react'
import Navbar from './components/Navbar'
import Window1 from './components/Window1';
import Window2 from './components/Window2'
import Window3 from './components/Window3'
import Sidebar from './components/Sidebar';
import './App.css'
import '@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css';
import '@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import { GoldenLayoutComponent } from '@annotationhub/react-golden-layout';



//Starting point of whole website 
function App() {
  const [layoutManager, setLayoutManager] = useState(null);

  return (
    <div className='app-container'>
      <Navbar />
      {/* From here the Golden Layout Starts it gets three different componets and arrange it as per the config */}
      <div style={{ width: '100%', height: '90%', display: 'flex' }}>

        <Sidebar />
        <GoldenLayoutComponent
          // (Required) Golden Layout Config. (See http://golden-layout.com/docs/Config.html)
          config={{
            // you can change the type to arrange it column wise
            content: [{
              type: 'row',
              content: [{
                component: Window1, //here the window1 get rendered 
                title: 'A Component', //Its the title of window
                width: 15, //From here we can change the width of the window1 (Optional)
              },
              {
                component: Window2,
                title: 'B Component',
                width: 50
              },
              {
                component: Window3,
                title: 'C Component',
                width: 35
              }]
            }]
          }}
          // (Optional) Set up auto-resizing. Layout will resize when the window resizes.
          autoresize={true}
          // (Optional) (Milliseconds) Debounce resize to prevent excessive re-renders.
          debounceResize={100}
          // (Optional) Grab the instance of the GoldenLayout Manager. Gives you full access to GL API.
          onLayoutReady={setLayoutManager}
        />
      </div>
    </div>
  )
}

export default App

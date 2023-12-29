//For modular design importing different components and hooks
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import '@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css';
import '@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import { GoldenLayoutComponent } from '@annotationhub/react-golden-layout';

function ComponentA() {
  return <h2>A</h2>;
}

function ComponentB() {
  return <h2>B</h2>;
}

function ComponentC(props) {
  return <h2>{props.myText}</h2>;
}

//Starting point of whole website 
function App() {
  const [layoutManager, setLayoutManager] = useState(null);

  return (
    <div className='app-container'>
      <Navbar />
        {/* From here the Golden Layout Starts it gets three different componets and arrange it as per the config */}
      <div style={{ width: '100%', height: '90%' }}>
        <GoldenLayoutComponent
          // (Required) Golden Layout Config. (See http://golden-layout.com/docs/Config.html)
          config={{
            // you can change the type to arrange it row wise 
            content: [{
              type: 'column',
              content: [{
                component: ComponentA,
                title: 'A Component'
              }, {
                type: 'row',
                content: [{
                  component: ComponentB,
                  title: 'B Component'
                }, {
                  component: () => <ComponentC myText="Component with Props" />,
                  title: 'C Component'
                }]
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

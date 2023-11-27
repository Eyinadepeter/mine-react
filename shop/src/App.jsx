import './App.css'
import Article from './article'
import Header from './header'
import Secondarticle from './secondArticle'

function App() {
  return (
   <div className="app">
    <div className="header">
      <Header/>
  </div>
  <div className="article">
    <Article/>
  </div>
  <div className="second">
    <Secondarticle/>
  </div>
  <div>
  </div>
   </div>
  )
}

export default App

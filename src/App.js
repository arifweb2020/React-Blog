import React from 'react'
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import SinglePost from './Pages/SinglePost';
import CreatePost from './Pages/CreatePost';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home}/>
	   <Route  path="/about" component={About}/>
		<Route  path="/blog-post/:id" component={SinglePost}/>
     
    <Route  path="/create-post" component={CreatePost}/>
    {/*  <Route  path="/update-post/:id" component={EditPost}/>*/}
      </Switch>
    </div>
    </Router>
  );
}



export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <Link to='/topics'>Link To Topics</Link><br/>
      <button onClick={() => props.history.push('/topics')}>browse using the history prop</button><br/>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>Dynamic Link to Topic 13</Link><br/>
      <Link to={`${props.match.url}/17`}>Dynamic Link to Topic 17</Link><br/>
      <Link to={`${props.match.url}/21`}>Dynamic Link to Topic 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      {/*<Route path='/topics/:topicId' component={TopicDetail} />*/}
      <Route exact path='/blog/asdqw/topics' component={TopicsList} />
      <Route path='/blog/asdqw/topics/:topicId' component={TopicDetail} />
      {/*<Route exact path='/blog/topics' component={TopicsList} />*/}
      {/*<Route path='/blog/topics/:topicId' component={TopicDetail} />*/}
    </div>
  );
}

export default App;

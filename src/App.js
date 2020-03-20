import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllProgrammsPage from './pages/AllProgrammsPage';
import ProgrammPage from './pages/ProgrammPage';
import DraftPage1 from './pages/DraftPage1';
import DraftPage2 from './pages/DraftPage2';
import DraftPage3 from './pages/DraftPage3';
import LoginPage from './pages/LoginPage';

import programmList from './mocks/programmList.js';

import "@gpn-design/uikit/dist/style.css";
import './App.css';

function App() {
  return (
		<Switch>
			<Route exact path="/">
				<AllProgrammsPage programmList={programmList} />
			</Route>
			<Route exact path="/programm/:id">
				<ProgrammPage programmList={programmList}/>
			</Route>
			<Route exact path="/draft-step-1">
				<DraftPage1/>
			</Route>
			<Route exact path="/draft-step-2">
				<DraftPage2/>
			</Route>
			<Route exact path="/draft-step-3">
				<DraftPage3/>
			</Route>
			<Route path="/login" component={LoginPage} />
		</Switch>
	);
}

export default App;

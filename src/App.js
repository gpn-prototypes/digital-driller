import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Informer, Text } from '@gpn-design/uikit';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Field from './components/Field/Field';

import LoginPage from './pages/LoginPage';

// страницы куратора
import CuratorProgrammsPage from './pages/curator/CuratorProgrammsPage';
import CuratorProgrammPage from './pages/curator/CuratorProgrammPage';
import CuratorDraftPage1 from './pages/curator/CuratorDraftPage1';
import CuratorDraftPage2 from './pages/curator/CuratorDraftPage2';
import CuratorDraftPage3 from './pages/curator/CuratorDraftPage3';

// страницы геолога
import GeologistProgrammsPage from './pages/geologist/GeologistProgrammsPage';
import GeologistProgrammPage from './pages/geologist/GeologistProgrammPage';

import programmList from './mocks/programmList.js';

import "@gpn-design/uikit/dist/style.css";
import './App.css';

function App() {
  return (
		<React.Fragment>
		<Switch>
			<Route exact path="/">
				<LoginPage/>
			</Route>

			{/* для куратора */}
			<Route exact path="/curator/list:isNew">
				<CuratorProgrammsPage programmList={programmList} />
			</Route>
			<Route exact path="/curator/programm/:id">
				<CuratorProgrammPage programmList={programmList}/>
			</Route>
			<Route exact path="/curator/draft-step-1">
				<CuratorDraftPage1/>
			</Route>
			<Route exact path="/curator/draft-step-2">
				<CuratorDraftPage2/>
			</Route>
			<Route exact path="/curator/draft-step-3">
				<CuratorDraftPage3/>
			</Route>

			{/* для геологов */}
			<Route exact path="/geologist/list">
				<GeologistProgrammsPage programmList={programmList} />
			</Route>
			<Route exact path="/geologist/programm/:id">
				<GeologistProgrammPage programmList={programmList}/>
			</Route>
		</Switch>

		</React.Fragment>
	);
}

export default App;

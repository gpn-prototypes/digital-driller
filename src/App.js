import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

// страницы куратора
import CuratorProgrammsPage from './pages/curator/CuratorProgrammsPage';
import CuratorProgrammPage from './pages/curator/CuratorProgrammPage';
import CuratorDraftPage1 from './pages/curator/CuratorDraftPage1';
import CuratorDraftPage2 from './pages/curator/CuratorDraftPage2';
import CuratorDraftPage3 from './pages/curator/CuratorDraftPage3';
import CuratorProfilePage from './pages/curator/CuratorProfilePage';

// страницы геолога
import GeologistProgrammsPage from './pages/geologist/GeologistProgrammsPage';
import GeologistProgrammPage from './pages/geologist/GeologistProgrammPage';
import GeologistProfilePage from './pages/geologist/GeologistProfilePage';

import programmList from './mocks/programmList.js';

import "@gpn-design/uikit/dist/style.css";
import './App.css';

function App() {
  return (
		<React.Fragment>
		<Switch>
			<Route exact path="/digital-driller/">
				<LoginPage/>
			</Route>

			{/* для куратора */}
			<Route exact path="/digital-driller/curator/list:isNew">
				<CuratorProgrammsPage programmList={programmList} />
			</Route>
			<Route exact path="/digital-driller/curator/programm/:id">
				<CuratorProgrammPage programmList={programmList} />
			</Route>
			<Route exact path="/digital-driller/curator/draft-step-1">
				<CuratorDraftPage1 />
			</Route>
			<Route exact path="/digital-driller/curator/draft-step-2">
				<CuratorDraftPage2 />
			</Route>
			<Route exact path="/digital-driller/curator/draft-step-3">
				<CuratorDraftPage3 />
			</Route>
			<Route exact path="/digital-driller/curator/profile">
				<CuratorProfilePage />
			</Route>

			{/* для геологов */}
			<Route exact path="/digital-driller/geologist/list">
				<GeologistProgrammsPage programmList={programmList} />
			</Route>
			<Route exact path="/digital-driller/geologist/programm/:id">
				<GeologistProgrammPage programmList={programmList} />
			</Route>
			<Route exact path="/digital-driller/geologist/profile">
				<GeologistProfilePage />
			</Route>
		</Switch>

		</React.Fragment>
	);
}

export default App;

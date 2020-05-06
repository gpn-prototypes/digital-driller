import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RoleProvider from './context/ProjectContext';

import { cnTheme } from '@gpn-design/uikit/Theme';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_font/theme_font_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/utils/whitepaper/whitepaper.css';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DraftPage1 from './pages/DraftPage1';
import DraftPage2 from './pages/DraftPage2';
import DraftPage3 from './pages/DraftPage3';
import ProgrammPage from './pages/ProgrammPage';

// страницы куратора
// import CuratorProgrammPage from './pages/curator/CuratorProgrammPage';
// import CuratorProfilePage from './pages/curator/CuratorProfilePage';

// страницы геолога
// import GeologistProgrammPage from './pages/geologist/GeologistProgrammPage';
// import GeologistProfilePage from './pages/geologist/GeologistProfilePage';

// import programmList from './mocks/programmList.js';

import './App.css';

function App() {
  return (
		<RoleProvider>
			<div className={cnTheme({
				color: 'gpnDefault',
				control: 'gpnDefault',
				font: 'gpnDefault',
				size: 'gpnDefault',
				space: 'gpnDefault'
			}, ['theme_gap_medium', 'page'])}>
			
				<Switch>
					<Route exact path="/digital-driller/">
						<LoginPage/>
					</Route>
					
					<Route exact path="/digital-driller/main:newprogramm">
						<MainPage/>
					</Route>

					<Route exact path="/digital-driller/draft-step-1">
						<DraftPage1 />
					</Route>
					<Route exact path="/digital-driller/draft-step-2">
						<DraftPage2 />
					</Route>
					<Route exact path="/digital-driller/draft-step-3">
						<DraftPage3 />
					</Route>
					
					<Route exact path="/digital-driller/programm/:id">
						<ProgrammPage />
					</Route>
					{/* <Route exact path="/digital-driller/geologist/profile">
						<GeologistProfilePage />
					</Route> */}
				</Switch>

			</div>
		</RoleProvider>
	);
}

export default App;

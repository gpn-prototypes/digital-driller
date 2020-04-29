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

// страницы куратора
// import CuratorProgrammsPage from './pages/curator/CuratorProgrammsPage';
// import CuratorProgrammPage from './pages/curator/CuratorProgrammPage';
// import CuratorDraftPage1 from './pages/curator/CuratorDraftPage1';
// import CuratorDraftPage2 from './pages/curator/CuratorDraftPage2';
// import CuratorDraftPage3 from './pages/curator/CuratorDraftPage3';
// import CuratorProfilePage from './pages/curator/CuratorProfilePage';

// страницы геолога
// import GeologistProgrammsPage from './pages/geologist/GeologistProgrammsPage';
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
					
					<Route exact path="/digital-driller/main">
						<MainPage/>
					</Route>

					{/* для куратора */}
					{/* <Route exact path="/digital-driller/curator/list:isNew">
						<CuratorProgrammsPage programmList={programmList} />
					</Route> */}
					{/* <Route exact path="/digital-driller/curator/programm/:id">
						<CuratorProgrammPage programmList={programmList} />
					</Route> */}
					{/* <Route exact path="/digital-driller/curator/draft-step-1">
						<CuratorDraftPage1 />
					</Route> */}
					{/* <Route exact path="/digital-driller/curator/draft-step-2">
						<CuratorDraftPage2 />
					</Route> */}
					{/* <Route exact path="/digital-driller/curator/draft-step-3">
						<CuratorDraftPage3 />
					</Route> */}
					{/* <Route exact path="/digital-driller/curator/profile">
						<CuratorProfilePage />
					</Route> */}

					{/* для геологов */}
					{/* <Route exact path="/digital-driller/geologist/list">
						<GeologistProgrammsPage programmList={programmList} />
					</Route> */}
					{/* <Route exact path="/digital-driller/geologist/programm/:id">
						<GeologistProgrammPage programmList={programmList} />
					</Route> */}
					{/* <Route exact path="/digital-driller/geologist/profile">
						<GeologistProfilePage />
					</Route> */}
				</Switch>

			</div>
		</RoleProvider>
	);
}

export default App;

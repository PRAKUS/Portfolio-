import "./App.css";
import "./css/main.css";
import "./css/mobile.css";
import "./css/tablet.css";
import Main from "./main";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' component={Main} exact />
					<Route path='/home' component={Main} exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

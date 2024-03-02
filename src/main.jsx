import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<HashRouter>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</HashRouter>
);

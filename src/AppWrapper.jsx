import { useState } from "react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";

const AppWrapper = () => {
	const queryClient = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 10 * (60 * 1000),
						cacheTime: 15 * (60 * 1000),
					},
				},
			})
	)[0];

	return (
		<HashRouter>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</HashRouter>
	);
};

export default AppWrapper;

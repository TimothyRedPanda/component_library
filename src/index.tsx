import * as Sentry from "@sentry/react"; // Your main application component
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

Sentry.init({
	dsn: "https://dbed1403960aa54086d3f084d39f09b7@o4507050560520192.ingest.us.sentry.io/4507050723508224",
	integrations: [new Sentry.BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
	// Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
});

// biome-ignore lint/style/noNonNullAssertion: <Will Sort later>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

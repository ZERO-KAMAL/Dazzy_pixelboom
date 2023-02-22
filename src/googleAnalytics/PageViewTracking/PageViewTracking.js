import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

/**
 * Browser history stores the location in regular URLs
 */
export const history = createBrowserHistory();

/** 
 * Sets up a listener that will be called whenever the current location changes.
 * @param listener — A function that will be called when the location changes
 * @returns — unlisten - A function that may be used to stop listening
*/
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

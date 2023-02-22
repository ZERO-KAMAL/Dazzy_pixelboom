import ReactGA from "react-ga";
import { gtag } from "ga-gtag";

/**
 * Tracking the number of user sign up on the website.
 */
export const SignUpEvent  = () =>
  ReactGA.event({ 
    category: "Sign Up",
    action: "User pressed the big blue sign up button",
  });


/**
 *Tracking the the event such button click
 *This setup is for universal analytics in Google analytics.
 *we can connect react js application with google analytics using universal analytics and google anayltics 4
 * @param {string} category type of event to track
 * @param {string} action action name of the event
 * @param {string} label label for this event and this can be optional
 */
 export const useAnalyticsEventTracker = (category, action, label = "") => {
  ReactGA.event({ category, action, label });
};

/**
 * This Event is a Google Analytics 4 Events
 * @param {string} event  type of event to track
 * @param {string} action   action name of the event
 */
export const CustomEventHandler = (event, action)=>gtag(event, action, {
    poll_title: 'some value',
  })
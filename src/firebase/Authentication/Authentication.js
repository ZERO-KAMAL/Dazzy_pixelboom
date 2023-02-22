import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../Setup/Setup";

/**
 * Registering user with the firebase and sending a mail to the user for verification
 * Return true for the valid email id and false for any error
 * @param {string} email - email of the user for sign up
 * @param {string} password - password of the user for signup
 * @returns {boolean} true for valid email and false for invid email
 */
export const signUp = (email, password) =>
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(async (userCredential) => {
      /**
       * Sends a verification email to a user.
       * @param {object} user — The user.
       */
      await sendEmailVerification(userCredential.user);
      return true;
    })
    .catch(() => {
      return false;
    });

/**
 *Returns accesstoken and error object
 * @param {string} email The users email address
 * @param {string} password The users password for signin
 * @returns {object}  access token and error
 */
export const signIn = (email, password) =>
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      return { accessToken: userCredential.user.accessToken, err: "" };
    })
    .catch((error) => {
      return { accessToken: "", err: error.code };
    });

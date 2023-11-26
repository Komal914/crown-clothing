import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../ components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={logGoogleUser}>Sign in with Google Redirect</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;

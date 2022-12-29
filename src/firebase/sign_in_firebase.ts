import { auth } from "./setup_firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { User } from "../common/models";

export const SignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<String> => {
  const user = (await signInWithEmailAndPassword(auth, email, password)).user;
  return user.uid ;
};

export const SignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("da out");
    })
    .catch((error) => {
      // An error happened.
    });
};

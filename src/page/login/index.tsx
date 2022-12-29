import { useState } from "react";
import { InstagramLogo } from "../../components/images";
import { SignIn, SignOut } from "../../firebase";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // check exactly email
    try {
      setIsLoading(true); // loading on. user no spam click button
      if (email && password) {
        if (email.match(mailformat)) { // check email
          const uid = await SignIn({ email, password }); // login email from firebase

          if (uid) {
            navigate("/");
          }
        }else{
          alert("You have entered an invalid email address!");
        }
      } else {
        alert("input invalid");
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.layout}`}>
      <div className={`${styles.form_login}`}>
        <div className="flex flex-col items-center h-[100%]">
          <div className="my-5">
            <InstagramLogo />
          </div>
          <div className="w-[100%] px-4 my-5">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.form_login_field}`}
              placeholder="username"
            />
          </div>
          <div className="w-[100%] px-4 my-5">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={`${styles.form_login_field}`}
              placeholder="password"
              type="password"
            />
          </div>

          <div className="grow" />

          <div
            onClick={() => !isLoading && handleLogin({ email, password })}
            className={`${styles.form_login_button}`}
            // onClick ={() => SignOut()}
          >
            Login
            {isLoading && <div className={`${styles.loader}`}></div>}
          </div>
          <div className="grow" />
        </div>
      </div>
    </div>
  );
}

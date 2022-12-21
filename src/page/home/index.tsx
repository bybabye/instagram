
import UserStories from "../../components/user_stories";
import styles from "./styles.module.css";

export default function HomePage(): JSX.Element {
  return (
    <div className={"flex flex-row justify-center"}>
      <div className={`${styles.container_feed}`}>
        <UserStories/>
        <div>all post</div>
      </div>
      <div className={`${styles.suggestions}`}> div right</div>
    </div>
  );
}

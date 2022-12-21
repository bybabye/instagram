import { CircleAvatar } from "../../components/circle_avatar";
import UserStories from "../../components/user_stories";
import styles from "./styles.module.css";

export default function HomePage(): JSX.Element {
  return (
    <div className={"flex flex-row justify-center"}>
      <div className={`${styles.container_feed}`}>
        <UserStories />
        <div className={`${styles.container_post}`}>
          <div className={"flex flex-row justify-between items-center ml-3 mr-1 my-2"}>
            <div className="flex flex-row justify-center items-center">
              <CircleAvatar
                url={
                  "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/294695189_2249536608555347_7289291305221327625_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gZw14K0CWRMAX_abEVf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDOXt-uaZch1Vv--aIQbP1Joq9wQSi9aY7ADywxxVDQOQ&oe=63A69E4C"
                }
                size={32}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <p className="ml-[10px]">huy bui</p>
            </div>

              <div className="p-2">...</div>
          </div>
          <div className={`${styles.container_post_content}`}>content</div>
          <div>favorite</div>
          <div>comment</div>
        </div>
      </div>
      <div className={`${styles.suggestions}`}> div right</div>
    </div>
  );
}

import UserStories from "../../components/user_stories";
import styles from "./styles.module.css";
import PostItem from "../../components/post_item";
import { listPosts } from "../../common/data/list_posts";
import Suggestions from "../../components/suggestions";

export default function HomePage(): JSX.Element {
  return (
    <div className={"flex flex-row grow justify-center"}>
      <div className={`${styles.container_feed}`}>
        <UserStories />
        {listPosts && listPosts.map((e) => (
          <PostItem
            key={e.id}
            id={e.id}
            user={e.user}
            isLiked={e.isLiked}
            description={e.description}
            totalLike={e.totalLike}
            totalCmt={e.totalCmt}
            image={e.image}
          />
        ))}
      </div>
      <div className={`${styles.suggestions}`}>
        <Suggestions/>
      </div>
    </div>
  );
}

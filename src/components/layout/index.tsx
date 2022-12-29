import {
  CreatePost,
  Explore,
  Favourite,
  HomeIcon,
  InstagramLogo,
  Messages,
  More,
  Reels,
  Search,
} from "../images";
import { InstagramIcon } from "../images/icon/index";
import { MenuAvatar } from "../menu_avatar";
import { NavItem } from "../nav_item";
import styles from "./styles.module.css";

export default function SideBar({
  tabActive,
  onClickTab,
}: {
  tabActive: string;
  onClickTab: (s: String) => void;
}): JSX.Element {
  return (
    <div className={`${styles.sidebar}`}>
      <div
        className={`${styles.show_logo} cursor-pointer px-3 pt-[25px] pb-4 mb-[19px]`}
      >
        <InstagramLogo />
      </div>
      <div
        className={`${styles.show_icon_logo} cursor-pointer px-3 pt-[25px] pb-4 mb-[19px]`}
      >
        <InstagramIcon />
      </div>
      <div className={`grow ${styles.show_content}`}>
        <NavItem
          icon={<HomeIcon />}
          text={"Home"}
          isSelect={tabActive === ""}
          isHover={false}
          onClick={() => onClickTab("")}
        />
        <div className={`${styles.hide_on_mobile}`}>
          <NavItem
            icon={<Search />}
            text={"Search"}
            isSelect={tabActive === "Search"}
            isHover={false}
            onClick={function (): void {
              onClickTab("Search");
            }}
          />
        </div>

        <NavItem
          icon={<Explore />}
          text={"Explore"}
          isSelect={tabActive === "explore"}
          isHover={false}
          onClick={() => onClickTab("explore")}
        />
        <NavItem
          icon={<Reels />}
          text={"Reels"}
          isSelect={tabActive === "reelsPage"}
          isHover={false}
          onClick={() => onClickTab("reelsPage")}
        />
      
        <div className={`${styles.hide_on_mobile}`}>
          <NavItem
            icon={<Favourite />}
            text={"Notifications"}
            isSelect={tabActive === "notifications"}
            isHover={false}
            onClick={() => onClickTab("notifications")}
          />
        </div>
       
        <NavItem
          icon={<CreatePost />}
          text={"Create"}
          isSelect={tabActive === "create"}
          isHover={false}
          onClick={() => onClickTab("create")}
        />
         <NavItem
          icon={<Messages />}
          text={"Messages"}
          isSelect={tabActive === "messagePage"}
          isHover={false}
          onClick={() => onClickTab("messagePage")}
        />
        <NavItem
          icon={
            <MenuAvatar
              url={
                "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/294695189_2249536608555347_7289291305221327625_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vrgVofCEikUAX9hKFMI&tn=J-MbVsjRypoG6ziY&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDUKkkV9KnXFoZlLsFQKly5o7IgkOcG8mXMwroAG2qu7Q&oe=63A69E4C"
              }
              size={24}
              isSelect={false}
              onClick={() => onClickTab("")}
            />
          }
          text={"Profile"}
          isSelect={tabActive === "profile"}
          isHover={false}
          onClick={() => onClickTab("profile")}
        />
      </div>
      <div className={`${styles.hide_on_mobile}`}>
        <NavItem
          icon={<More />}
          text={"More"}
          isSelect={false}
          isHover={false}
          onClick={() => onClickTab("")}
        />
      </div>
    </div>
  );
}

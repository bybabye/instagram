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
import { MenuAvatar } from "../menu_avatar";
import { NavItem } from "../nav_item";
import styles from "./styles.module.css";

export default function SideBar(): JSX.Element {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`cursor-pointer px-3 pt-[25px] pb-4 mb-[19px]`}>
        <InstagramLogo />
      </div>
      <div className={'grow'}>
        <NavItem
          icon={<HomeIcon />}
          text={"Home"}
          isSelect={true}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<Search />}
          text={"Search"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<Explore />}
          text={"Explore"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<Reels />}
          text={"Reels"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<Messages />}
          text={"Messages"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<Favourite />}
          text={"Notifications"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<CreatePost />}
          text={"Create"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <NavItem
          icon={<MenuAvatar
            url={
              "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/294695189_2249536608555347_7289291305221327625_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vrgVofCEikUAX9hKFMI&tn=J-MbVsjRypoG6ziY&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDUKkkV9KnXFoZlLsFQKly5o7IgkOcG8mXMwroAG2qu7Q&oe=63A69E4C"
            }
            size={24}
            isSelect={false}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />}
          text={"Profile"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      </div>
      <div >
        <NavItem
          icon={<More />}
          text={"More"}
          isSelect={false}
          isHover={false} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      </div>
    </div>
  );
}

import { CircleAvatar } from "../../components/circle_avatar";

import styles from "./styles.module.css";
import { UserStory } from "../../common/data/list_stories";
import { useState } from "react";
import { Favourite } from "../images";
import { Comment, Ellipsis, IsFavourite, Save, Share } from "../images/icon";

export default function PostItem({
  id,
  user,
  isLiked,
  description,
  totalLike,
  totalCmt,
  image,
}: {
  id: string;
  user: UserStory;
  isLiked: boolean;
  description: string;
  totalLike: number;
  totalCmt: number;
  image: string;
}): JSX.Element {
  const [isCheck, setIsCheck] = useState(false);

  const handleRenderAllDescription = () => {
    setIsCheck(true);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat().format(val);
  };

  return (
    <div className={`${styles.container_post}`}>
      <div
        className={"flex flex-row justify-between items-center ml-3 mr-3 my-2"}
      >
        <div className="flex flex-row justify-center items-center ">
          <CircleAvatar
            url={user.avatar}
            size={32}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <p className="ml-[10px] text-[14px] font-semibold text-[#262626] ">
            {user.displayName}
          </p>
        </div>
        <Ellipsis />
      </div>
      <div className={`${styles.container_post_content}`}>
        <img alt="" src={image} className={"object-cover h-[100%] w-[100%]"} />
      </div>
      <div className={`${styles.container_post_footer}`}>
        <div className="mt-1 flex flex-row pb-[6px] px-3">
          {" "}
          {/* like comment share save*/}
          <div className="py-[8px] pr-2">
            {isLiked ? <IsFavourite /> : <Favourite />}
          </div>
          <div className="p-[8px]">
            <Comment />
          </div>
          <div className="p-[8px]">
            <Share />
          </div>
          <div className="grow">
            <div className="float-right py-[8px] pl-2">
              <Save />
            </div>
          </div>
        </div>
        <div className={"text-[14px] font-semibold px-3"}>
          {" "}
          {/*total like*/}
          {formatNumber(totalLike)} likes
        </div>
        <div className="text-[14px] font-semibold flex flex-row px-3">
          {user.displayName}
          {/* Description*/}
          <span
            className={` max-w-[260px] font-normal  ${
              isCheck ? "" : "whitespace-nowrap"
            } text-ellipsis overflow-hidden ml-1`}
          >
            {description}
          </span>
          {!isCheck && (
            <button onClick={() => handleRenderAllDescription()}>more</button>
          )}
        </div>
        <div className="text-[14px] text-[#8E8E8E] mt-2 px-3">
          View all {formatNumber(totalCmt)} comment
        </div>
        <div className="text-[10px] text-[#8E8E8E] mt-2 px-3 mb-3">
          2 days ago
        </div>
        <div className="border-t-[1px] border-[#ccc] px-3 py-1 flex flex-row  items-center">
          <Save /> {/* post comment*/}
          <input
            placeholder="Add a comment..."
            className="w-[100%] p-[8px]"
          ></input>
          <div>Post</div>
        </div>
      </div>
    </div>
  );
}

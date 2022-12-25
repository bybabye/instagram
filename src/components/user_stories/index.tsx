import { listStories } from "../../common/data/list_stories";
import UserAvatarStory from "../user_avatar_story";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function UserStories(): JSX.Element {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <div 
    {...events}
    ref = {ref}
    className="mt-4 bg-[#ffffff] whitespace-nowrap rounded-lg border-[1px] overflow-x-hidden py-4">
      {listStories.map((e, index) => {
        return (
          <div key={e.id} className="inline-block">
            <div
              className={
                "flex flex-col item-center justify-center items-center pl-4"
              }
            >
              <UserAvatarStory
                url={e.avatar}
                size={56}
                haveSeenBefore={e.haveSeenBefore}
              />
              <p
                className="text-ellipsis overflow-hidden max-w-[56px] text-xs pt-[6px] px-[2px]"
                style={{ color: e.haveSeenBefore ? "grey" : "black" }}
              >
                {e.displayName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

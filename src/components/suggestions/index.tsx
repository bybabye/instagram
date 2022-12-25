
import { CircleAvatar } from "../../components/circle_avatar";

export default function Suggestions(): JSX.Element {
 
  return (
    <div className="flex flex-col ml-8 mt-4">
      <div className="flex flex-row mt-4 mb-[10px] items-center">
        <CircleAvatar
          url={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/294695189_2249536608555347_7289291305221327625_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3Z351RsEgCcAX_RMFnI&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCfAutgAqaLAXcvAtjPQqmrZehDrEGZ9o5UBhPjyvyFFw&oe=63AC6A8A"
          }
          size={56}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div className="flex flex-col grow ml-3 ">
          <p className="text-[14px] font-semibold">huybui_29</p>
          <p className="text-[14px] text-[#8e8e8e]">Huy Bui</p>
        </div>

        <div className="text-[12px] text-[#0095f6] font-semibold">Switch</div>
      </div>
      <div className="flex flex-row justify-between text-[14px] font-semibold">
        <p className="text-[#8e8e8e]">Suggestions For You</p>
        <p>See All</p>
      </div>
      <div className="h-[300px]"></div>
      <div className="text-[14px] text-[#C7C7C7]">
        © 2022 INSTAGRAM FROM META
      </div>
    </div>
  );
}

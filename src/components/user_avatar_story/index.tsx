import { CircleAvatar } from "../circle_avatar";


export default function UserAvatarStory(
    {url ,size,haveSeenBefore} : {url:string;size:number;haveSeenBefore:boolean;}
) : JSX.Element  {
    return (
        <div className="">
            <div className={!haveSeenBefore ? 'p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-600 rounded-full' : 'border-[1px] rounded-full'} >
                <div className="p-[2px] bg-white rounded-full">
                    <CircleAvatar url={url} size={size} onClick={function (): void {
                        throw new Error("Function not implemented.");
                    } }/>
                </div>
            </div>
            
        </div>
    );
}
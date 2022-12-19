


export const MenuAvatar = ({
    url,
    size,
    onClick,
    isSelect
}: {url : string ;size: number;isSelect:boolean;  onClick: () => void}):JSX.Element => {
    return (
        <img
            src={url}
            style={{width:`${size}px`,height:`${size}px`, border : isSelect ? '2px solid #000' :'none',objectFit : 'cover' }}
            onClick = {onClick}
            className = 'rounded-full'
            alt=""
        />
    );
}
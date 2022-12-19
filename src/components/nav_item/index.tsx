import styles from './styles.module.css';

export const NavItem = (
    {icon,text,isSelect,isHover,onClick}:{icon: JSX.Element,text: string, isSelect: boolean , isHover: boolean,onClick: () => void}
): JSX.Element => {
    return (
        <div className={`${styles.nav_item}`  } onClick = {onClick}>
            {icon}
            <div className={'pl-4 text-base'} style = {{ fontWeight : isSelect ? '600' : 'normal' }}>{text}</div>
        </div>
    );
}
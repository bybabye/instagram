import SideBar from '../../components/layout';
import styles from './styles.module.css';


export default function RootPage() : JSX.Element {
    return (
        <div  className={`${styles.layout}`}>
            <SideBar/>
            <div>
                mainLayout / content
            </div>
        </div>
    );
}
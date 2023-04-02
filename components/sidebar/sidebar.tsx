import styles from './sidebar.module.css'

export default function Sidebar (){
    return (
        <>
        <div className={styles.sidebarContainer}>
            <nav className={styles.sidebar}>
                <span>T</span>
                <span>H</span>
                <span>I</span>
                <span>S</span>
                <span>-</span>
                <span>S</span>
                <span>I</span>
                <span>D</span>
                <span>E</span>
                <span>B</span>
                <span>A</span>
                <span>R</span>
            </nav>
        </div>
        </>
    )
}
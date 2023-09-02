import styles from'./Global.module.css'
import clsx from 'clsx'
function Home() {
    return (
        <h1 className={clsx(styles.colorRed)}>Home</h1>
    )
}
export default Home
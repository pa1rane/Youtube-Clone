import styles from './Sidebar.module.css'
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlineSubscriptions} from "react-icons/md";
import {MdOutlineVideoLibrary} from "react-icons/md";
import {VscHistory} from "react-icons/vsc";
import {RiVideoLine} from "react-icons/ri";
import {MdOutlineWatchLater} from "react-icons/md";
import {AiOutlineLike} from "react-icons/ai";
import {MdKeyboardArrowDown} from "react-icons/md";

const Sidebar = () => {
  return (
    <>
     <div className={styles.sidebar}>
       <div className={styles.home}>
       <AiOutlineHome className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Home</p>
       </div>
       <div className={styles.subs}>
       <MdOutlineSubscriptions className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Subscriptions</p>
       </div>
       <div className={styles.library}>
       <MdOutlineVideoLibrary className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Library</p>
       </div>
       <div className={styles.history}>
       <VscHistory className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>History</p>
       </div>
       <div className={styles.yVid}>
       <RiVideoLine className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Your Videos</p>
       </div>
       <div className={styles.wLater}>
       <MdOutlineWatchLater className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Watch Later</p>
       </div>
       <div className={styles.lVid}>
       <AiOutlineLike className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Liked Videos</p>
       </div>
       <div className={styles.showMore}>
       <MdKeyboardArrowDown className={styles.sideIcon}/>
       <p className={styles.sidebarNames}>Show More</p>
       </div>
     </div> 
    </>
  )
}

export default Sidebar

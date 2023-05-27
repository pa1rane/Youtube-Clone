import {RxHamburgerMenu} from 'react-icons/rx';
import {BsYoutube} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdKeyboardVoice} from 'react-icons/md';
import {BiVideoPlus} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {RxAvatar} from 'react-icons/rx';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={styles.mainDiv}>
      <div className={styles.left}>
       <div className={styles.menu}>
       <RxHamburgerMenu className={styles.menuIcon}fontSize="1.5rem"/>
       </div>
       <a href="/" className={styles.logo}>
        <BsYoutube className={styles.ytIcon} fontSize="1.8rem"/>YouTube
        </a>
        </div>

        <div className={styles.center}>
            <div className={styles.searchBar}>
           <input type="text" placeholder='Search' className={styles.searchInput} />
           <AiOutlineSearch className={styles.searchIcon}/>
           <MdKeyboardVoice className={styles.voiceIcon}/>
           </div>
           
        </div>

        <div className={styles.right}>
        <BiVideoPlus className={styles.icon}  fontSize="1.8rem"/>
        <IoMdNotificationsOutline className={styles.icon} fontSize="1.8rem" />
        <RxAvatar className={styles.icon}  fontSize="1.8rem"/>
        </div>

      </div>
    </>
  )
}

export default Navbar

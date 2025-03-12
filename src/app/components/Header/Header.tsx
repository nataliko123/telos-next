import clsx from "clsx";
import styles from "./Header.module.css";
import Image from "next/image";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.head, styles.centered)}>
        <Image src="/images/cyber.png" alt="Logo" width={50} height={50} />{" "}
        {/* Use next/image */}
        <div className={styles.search}>
          <Image
            src="/images/serach.png"
            alt="Search Icon"
            width={24}
            height={24}
          />{" "}
          {/* Use next/image */}
          <input type="text" placeholder="search" />
        </div>
        <ul className={styles.navbar}>
          <li>
            <a href="./home.html">Home</a>
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <div className={styles.profile}>
          <Image
            src="/images/cart.png"
            alt="Cart Icon"
            width={24}
            height={24}
          />{" "}
          {/* Use next/image */}
          <a href="cart.html">
            <Image
              src="/images/heart.png"
              alt="Heart Icon"
              width={24}
              height={24}
            />
          </a>
          <Image
            src="/images/profile.png"
            alt="Profile Icon"
            width={24}
            height={24}
          />{" "}
          {/* Use next/image */}
        </div>
        <Image
          className={styles.burger}
          src="/images/Burger.png"
          alt="Burger Menu"
          width={24}
          height={24}
        />{" "}
        {/* Use next/image */}
      </div>
    </header>
  );
};
export default Header;

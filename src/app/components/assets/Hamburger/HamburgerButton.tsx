'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import { useSidebar } from '../../Sidebar/SidebarContext';
import * as styles from './Hamburger.css';

export function HamburgerButton() {
  const { setIsOpen } = useSidebar();

  return (
    <button
      className={styles.hamburgerButton}
      onClick={() => setIsOpen(true)}
      type="button"
    >
      <RxHamburgerMenu />
    </button>
  );
}

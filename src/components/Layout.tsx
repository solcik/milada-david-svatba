import React from 'react';
import cls from 'classnames';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <main className={cls(styles.container, 'mx-auto', 'my-4', 'md:max-w-6xl')}>{children}</main>
    </>
  );
}

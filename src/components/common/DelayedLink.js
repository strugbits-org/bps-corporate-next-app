import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { pageLoadFinished, pageLoadStart } from '@/utils/animationsTriggers';

const DelayedLink = ({ to, children, className, target, attributes }) => {
  const router = useRouter();

  const delayedRedirect = (e) => {
    e.preventDefault();

    if (to === undefined) return;

    if (router.pathname === to) {
      // pageLoadStart();
      setTimeout(() => pageLoadFinished(), 900);
      return;
    }

    if (target === undefined) {
      // pageLoadStart();
      setTimeout(() => {
        router.push(to)
      }, 900);
    } else {
      window.open(to, target);
    }
  };

  return (
  <Link href={to} target={target} className={className} onClick={delayedRedirect} {...attributes}>
    {children}
  </Link>
  );
};

export default DelayedLink;
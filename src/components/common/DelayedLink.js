import { closeModals, pageLoadEnd, pageLoadStart } from '@/utils/utilityFunctions';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DelayedLink = ({ to, children, className, target, attributes }) => {
  const router = useRouter();

  const delayedRedirect = (e) => {
    e.preventDefault();
    closeModals();
    if (to === undefined) return;

    if (router.pathname === to) {
      pageLoadStart();
      setTimeout(() => {
        pageLoadEnd();
      }, 900);
      return;
    }

    if (target === undefined) {
      pageLoadStart();
      setTimeout(() => {
        router.push(to)
      }, 900);
    } else {
      window.open(to, target);
    }
  };

  return (
    <Link href={to || ""} target={target} className={className} onClick={delayedRedirect} {...attributes}>
      {children}
    </Link>
  );
};

export default DelayedLink;
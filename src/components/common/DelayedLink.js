import Link from 'next/link';
import { useRouter } from 'next/router';

const DelayedLink = ({ to, children, className, target, attributes }) => {
  const router = useRouter();

  const delayedRedirect = (e) => {
    e.preventDefault();

    if (to === undefined) return;

    if (router.pathname === to) {
      if (typeof window !== 'undefined') {
        document.body.classList.add("page-leave-active");
      }
      setTimeout(() => {
        if (window && typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
          const body = document.body;
          if (body.classList.contains('menu-active')) body.classList.remove('menu-active');
          body.classList.add("page-enter-active");
          body.classList.remove("page-leave-active");
          setTimeout(() => {
            body.classList.remove("page-enter-active");
          }, 900);
        }
      }, 900);
      return;
    }

    if (target === undefined) {
      if (typeof window !== 'undefined') {
        document.body.classList.add("page-leave-active");
      }
      setTimeout(() => {
        router.push(to)
      }, 900);
    } else {
      window.open(to, target);
    }
  };

  return (
    <Link href={to||""} target={target} className={className} onClick={delayedRedirect} {...attributes}>
      {children}
    </Link>
  );
};

export default DelayedLink;
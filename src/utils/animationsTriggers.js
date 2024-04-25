import { closeModals } from "./utilityFunctions";

export const initAnimations = () => {
    if (typeof window !== 'undefined') {
        setTimeout(() => {
            document.querySelector(".initScript").click();
        }, 200);
    }
};

export const updatedWatched = () => {
    if (typeof window !== 'undefined') {
        setTimeout(() => {
            document.querySelector(".updateWatchedTrigger").click();
        }, 200);
    }
};

export const pageLoadStart = () => {
    closeModals();
    if (typeof window !== 'undefined') {
        document.body.classList.add("page-leave-active");
    }
};

export const pageLoadFinished = () => {

    if (typeof window !== 'undefined') {
        const body = document.body;
        if (body.classList.contains('menu-active')) body.classList.remove('menu-active');
        window.scrollTo({ top: 0 });
        body.classList.add("page-enter-active");
        body.classList.remove("page-leave-active");
        setTimeout(() => {
            body.classList.remove("page-enter-active");
            updatedWatched();
        }, 900);
    }
    
};

// export const startLoading = (disableLoader) => {
//     if (typeof window !== 'undefined' && !disableLoader) {
//         const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
//         const cleanPage = page.split("/")[0].trim();
//         const isDataLoaded = document.body.classList.contains(cleanPage + "-loaded");
//         if (isDataLoaded) pageLoadStart();
//     }
// };

// export const endLoading = (disableLoader) => {
//     if (typeof window !== 'undefined' && !disableLoader) {
//         const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
//         const cleanPage = page.split("/")[0].trim();
//         const isDataLoaded = document.body.classList.contains(cleanPage + "-loaded");
//         if (isDataLoaded) {
//             pageLoadFinished();
//             updatedWatched();
//         }
//     }
// };
import { initAnimations, pageLoadFinished, updatedWatched } from "./animationsTriggers";

let collectionLoaded = 0;

export const resetCount = () => {
    collectionLoaded = 0;
}

export const changeProgress = (percent) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        document.body.style.setProperty("--percentage", percent / 100);
        document.body.style.setProperty("--percentage2", `${percent}%`);
        const elProg = document.querySelector('[data-load-progress]');
        if (elProg) elProg.dataset.loadProgress = percent;
    }
}

export const handleCollectionLoaded = () => {
    collectionLoaded++;
    if (typeof window !== 'undefined') {
        const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
        const cleanPage = page.split("/")[0].trim();

        const collectionsCount = {
            'home': 2,
            'about': 6,
            'portfolio': 2,
            'blog': 2,
            'market': 3,
            'services': 3,
            'project': 3,
            'article': 3,
            'contact': 1,
        }[cleanPage] || 0;
        

        const markPageLoaded = () => {
            collectionLoaded = 0;
            document.body.classList.add(`${cleanPage}-loaded`);
            initAnimations();
            updatedWatched();
            const isFirstLoadDone = document.body.classList.contains("first-load-done");
            if (isFirstLoadDone) {
                pageLoadFinished();
            } else {
                window.scrollTo({ top: 0 });
                document.body.dataset.load = "first-leaving";
                setTimeout(() => {
                    document.body.dataset.load = "first-done";
                }, 1200);
                document.body.classList.add("first-load-done");
            }
        }

        if (collectionLoaded >= collectionsCount) {
            markPageLoaded();
        }
    }
};
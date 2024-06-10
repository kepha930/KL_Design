import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { headerID } from '@components/sections/Header';
import { SectionId } from '@data/dataDef';

export const useNavObserver = (
    selectors: string,
    handler: (section: SectionId | null) => void
) => {
    const pathname = usePathname();
    const [observer, setObserver] = useState<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer) {
            observer.disconnect(); // Cleanup previous observer if it exists
        }
        // Get all sections
        const headings = document.querySelectorAll(selectors);
        const headingsArray = Array.from(headings);
        const headerWrapper = document.getElementById(headerID);

        // Create the IntersectionObserver API
        const newObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const currentY = entry.boundingClientRect.y;
                    const id = entry.target.getAttribute('id');
                    if (headerWrapper) {
                        // Create a decision object
                        const decision = {
                            id,
                            currentIndex: headingsArray.findIndex(
                                (heading) => heading.getAttribute('id') === id
                            ),
                            isIntersecting: entry.isIntersecting,
                            currentRatio: entry.intersectionRatio,
                            aboveToc:
                                currentY <
                                headerWrapper.getBoundingClientRect().y,
                            belowToc: !(
                                currentY <
                                headerWrapper.getBoundingClientRect().y
                            ),
                        };
                        // console.log("decision", decision)
                        if (decision.isIntersecting) {
                            // Header at 50% from the top, update to current header
                            handler(decision.id as SectionId);
                        } else if (
                            !decision.isIntersecting &&
                            decision.currentRatio < 1 &&
                            decision.currentRatio > 0 &&
                            decision.belowToc
                        ) {
                            const currentVisible =
                                headingsArray[
                                    decision.currentIndex - 1
                                ]?.getAttribute('id');
                            handler(currentVisible as SectionId);
                        }
                    }
                });
            },
            {
                root: null,
                threshold: 0.1,
                rootMargin: '0px 0px -30% 0px',
            }
        );
        // Observe all the Sections
        headings.forEach((section) => {
            newObserver.observe(section);
        });
        setObserver(newObserver);
        return () => {
            newObserver.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, selectors, handler]);
};

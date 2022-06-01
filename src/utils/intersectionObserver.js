import { useState, useEffect } from 'react'

const useIntersection = (element) => {
    const [isVisible, setState] = useState(false);

    let options= {
        root: null,
        rootMargin: '50px 0px -20px',
        threshold: 1
    };
    
    useEffect(() => {
        const thisElement = element.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, options 
        );

        thisElement && observer.observe(thisElement);

        return () => observer.unobserve(thisElement);
    }, [element]);

    return isVisible;
};

export default useIntersection;
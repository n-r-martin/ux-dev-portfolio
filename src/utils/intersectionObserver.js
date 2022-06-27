import { useState, useEffect } from 'react'

const useIntersection = (element) => {
    const [isVisible, setState] = useState(false);
  
    useEffect(() => {
        let options= {
            root: null,
            rootMargin: '50px 0px -20px',
            threshold: 1
        };
        
        const thisElement = element.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, options 
        );

        thisElement && observer.observe(thisElement);

        return () => observer.unobserve(thisElement);
    }, [element, isVisible]);

    return isVisible;
};

export default useIntersection;
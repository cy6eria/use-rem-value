import { useState, useCallback, useEffect } from 'react';

const config = { attributes: true, attributeFilter: ['style', 'class', 'id'] };

const getRemValue = () => parseInt(
    window.getComputedStyle(document.documentElement).getPropertyValue('font-size')
);

const useRemValue = () => {
    const [remValue, setRemValue] = useState(getRemValue());

    const handleChange = useCallback(() => {
        const nextValue = getRemValue();

        if (nextValue !== remValue) {
            setRemValue(nextValue);
        }
    }, [remValue]);

    const handleAttributesChange = useCallback((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                handleChange();
            }
        }
    }, []);

    useEffect(() => {
        let observer = { disconnect: () => {} };
        window.addEventListener('resize', handleChange);
        
        if (typeof MutationObserver !== 'undefined') {
            observer = new MutationObserver(handleAttributesChange);
            observer.observe(document.documentElement, config);  
        }

        return () => {
            window.removeEventListener('resize', handleChange);
            observer.disconnect();
        };
    }, [handleChange]);

    return remValue;
};

export default useRemValue;

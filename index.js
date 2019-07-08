import { useState, useCallback, useEffect } from 'react';

const getRemValue = () => parseInt(window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size'));

const useRemValue = () => {
    const [remValue, setRemValue] = useState(getRemValue());
    const handleResize = useCallback(() => {
        const nextValue = getRemValue();

        if (nextValue !== remValue) {
            setRemValue(nextValue);
        }
    }, [remValue]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return remValue;
};

export default useRemValue;

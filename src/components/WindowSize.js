import { useState, useEffect } from 'react';

function GetWindowDimensions() {
    const { innerWidth: Width, innerHeight: Height } = window;
    return {
        Width,
        Height
    };
}

export default function UseWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(GetWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(GetWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
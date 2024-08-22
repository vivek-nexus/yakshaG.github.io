import { useEffect, useState } from 'react';

const FontLoader = ({ children }) => {
    const [isFontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        // Check if window is defined to ensure code runs only on the client side
        if (typeof window !== 'undefined') {
            const WebFontLoader = require('webfontloader');

            WebFontLoader.load({
                google: {
                    families: [
                        'Courier Prime',
                        'Manrope:wght@300;400;600;700',
                        'Material Symbols Outlined:wght@100;200;300;400;500;600;700'
                    ]
                },
                active: () => setFontLoaded(true),
                inactive: () => setFontLoaded(true) // Fallback in case of failure
            });
        }
    }, []);

    if (!isFontLoaded) {
        return null; // Show a spinner or loading state if necessary
    }

    return children;
};

export default FontLoader;

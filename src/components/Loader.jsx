import { useState, useEffect } from 'react';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 80) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 20;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const borderColors = progress >= 80 ? 'border-yellow-400 border-t-8 border-t-gray-800' : '';

    const loaderStyle = {
        borderTopColor: progress >= 25 ? 'transparent' : 'yellow',
        borderRightColor: progress >= 50 ? 'transparent' : 'yellow',
        borderBottomColor: progress >= 75 ? 'transparent' : 'yellow',
        borderLeftColor: progress >= 100 ? 'transparent' : 'yellow',
        transform: `rotate(${(progress * 360) / 100}deg)`
    };

    return (
        <div className={`border-8 w-20 h-20 rounded-full animate-spin ${borderColors}`} style={loaderStyle}></div>
    );
};

export default Loader;

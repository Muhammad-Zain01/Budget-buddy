import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useLoadingState = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [previousPath, setPreviousPath] = useState('');

    useEffect(() => {
        const handleStart = (url: string) => {
            if (url !== previousPath) {
                setLoading(true);
                setPreviousPath(url);
            }
        };

        const handleComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
        };
    }, [router.events, previousPath]);
    return { loading }
}

export default useLoadingState;
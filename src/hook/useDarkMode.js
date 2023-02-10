import { useEffect } from "react";
import { useSelector } from "react-redux"

export const useDarkMode = () => {
    const {theme} = useSelector(state => state.theme);
    console.log(theme);
    const otherTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(otherTheme);
        root.classList.add(theme);
    }, [theme, otherTheme]);

    return [otherTheme];
}

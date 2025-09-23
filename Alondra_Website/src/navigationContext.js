import { createContext, useContext } from 'react';

export const NavigationContext = createContext({
    currentPage: 'home',
    navigate: () => {}
});

export function useNavigation() {
    return useContext(NavigationContext);
}

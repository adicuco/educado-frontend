import create from 'zustand'
import axios, { AxiosRequestConfig } from 'axios'
import jwtHelpers from '../helpers/jwt.helpers';

const REFRESH_TOKEN_URL = import.meta.env.VITE_BACKEND_URL + "/auth/refresh/jwt";

interface AuthState {
    token: string | null | undefined,
    refresh: string | null | undefined
    setToken: (input: string) => void,
    clearToken: () => void,
    getToken: () => Promise<string | null>
}

const useAuthStore = create<AuthState>((set, get) => ({
    token: null,
    refresh: null,
    setToken: (input: string | undefined) => set((state) => ({ token: state.token = input })),
    clearToken: () => set((state) => ({ token: state.token = null })),
    getToken: async () => {
        const accessToken = get().token;
        const refreshToken = get().refresh;

        // accessToken is valid -> token
        if (!jwtHelpers.isExpired(accessToken)) {
            console.log("access token not expired. Using current accessToken");
            
            return accessToken;
        }

        // Refresh the token pair with refresh token -> token
        if (!jwtHelpers.isExpired(refreshToken)) {
            console.log("access token is expired. Trying to fetch new access token with refresh token");
            // Fetch new token pairs from API
            const response = await axios.get(REFRESH_TOKEN_URL, { headers: { Authorization: `Bearer ${refreshToken}` } });

            // Update state with new token pair
            set((state) => ({ token: state.token = response.data.access }))
            set((state) => ({ refresh: state.refresh = response.data.refresh }))

            return response.data.access;
        }

        console.log("new token pair could not be fetched. Return to login!");
        return null
    },
}))

export default useAuthStore;

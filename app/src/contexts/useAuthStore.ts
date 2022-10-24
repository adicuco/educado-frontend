import create from 'zustand'

interface AuthState {
    token: string | null | undefined,
    setToken: (input: string) => void,
    clearToken: () => void,
}

const useAuthStore = create<AuthState>((set) => ({
    token: null,
    setToken: (input: string | undefined) => set((state) => ({ token: state.token = input })),
    clearToken: () => set((state) => ({ token: state.token = null}))
}))

export default useAuthStore;

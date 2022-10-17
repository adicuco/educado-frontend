import create from 'zustand'

interface AuthState {
    token: string | undefined,
    setToken: (input: string) => void,
}

const useAuthStore = create<AuthState>((set) => ({
    token: undefined,
    setToken: (input: string) => set((state) => ({ token: state.token = input}))
}))

export default useAuthStore;

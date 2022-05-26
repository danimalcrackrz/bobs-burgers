import create from "zustand"

const useStore = create((set) => ({
  data: [],
  setData: (body) => set((state) => ({ data: body })),
}))

export default useStore

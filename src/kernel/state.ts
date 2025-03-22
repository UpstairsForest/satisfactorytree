import { create } from 'zustand'

type Node = {
    id: number
    name: string
    position: { x: number, y: number }
    recipe?: string
}

type State = {
    nodes: Node[]
    setRecipe: (id: number, recipe: string) => void
    addNode: (node: Node) => void
}

export const useStore = create<State>((set) => ({
    nodes: [
        { id: 1, name: "Iron Plate", position: { x: 100, y: 100 } },
        { id: 2, name: "Screws", position: { x: 300, y: 200 } },
    ],
    setRecipe: (id, recipe) => set((state) => ({
        nodes: state.nodes.map(n => n.id === id ? { ...n, recipe } : n)
    })),
    addNode: (node) => set((state) => ({
        nodes: [...state.nodes, node]
    }))
}))
export interface OutputNode {
    name: ResourceName,
    prodRate: number
    recipe: Recipe,
}

export interface Recipe {
    recName: ResourceName,
    prodRate: number,
    inputs: Array<InputSubNode>,
}

interface InputSubNode {
    name: ResourceName,
    rate: string,
}

enum ResourceName {
    SmartPlating,
    ModularFrame,
    Rotor,
    ReinforcedIronPlate,
    Screw,
    IronRod,
    IronPlate,
    IronIngot,
}
export enum PromptsEnum {
  fantasy = 1,
  scifi = 2,
  journal = 3,
  romance = 4,
}

export type Prompts = {
    prompt: string
    type: number
}

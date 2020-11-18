export type Feature =
    | 'lossy'
    | 'lossless'
    | 'alpha'
    | "animation"

export type Callback = (result: boolean) => void
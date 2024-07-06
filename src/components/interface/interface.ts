
export interface IUser {
    username:  File | string
    password:  File | string
}

export interface IToken {
    "token": string
}

export interface IResponseAuth {
    error_code: number
    error_message: string,
    data: IToken
    profiling: string
    timings: null
}

export interface IState {
    loadingStatus: string
    error: string | null
    user: IUser
    token: ''

}


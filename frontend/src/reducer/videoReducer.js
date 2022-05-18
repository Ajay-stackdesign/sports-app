import { CLEAR_ERRORS, VIDEO_ALL_FAIL, VIDEO_ALL_REQUEST, VIDEO_ALL_SUCCESS, VIDEO_CREATE_FAIL, VIDEO_CREATE_REQUEST, VIDEO_CREATE_RESET, VIDEO_CREATE_SUCCESS } from "../constant/video";


export const videoGetreducer = (state = { video: [] }, action) => {
    switch (action.type) {
        case VIDEO_ALL_REQUEST:
            return {
                ...state,
                loading: true,
                video: []
            }
        case VIDEO_ALL_SUCCESS:
            return {
                loading: false,
                video: action.payload.video
            }
        case VIDEO_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }

}

export const videoCreateReducer = (state = { video: {} }, action) => {
    switch (action.type) {
        case VIDEO_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case VIDEO_CREATE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                video: action.payload.video
            }
        case VIDEO_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case VIDEO_CREATE_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
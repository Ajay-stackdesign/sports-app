import {
    VIDEO_ALL_SUCCESS,
    VIDEO_ALL_REQUEST,
    VIDEO_ALL_FAIL,
    VIDEO_CREATE_REQUEST,
    VIDEO_CREATE_SUCCESS,
    VIDEO_CREATE_FAIL,
    CLEAR_ERRORS
} from "../constant/video";
import axios from "axios"

export const getVideo = () => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_ALL_REQUEST })

        const { data } = await axios.get("/api/v1/video/get")

        dispatch({
            type: VIDEO_ALL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: VIDEO_ALL_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_CREATE_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/video`,
            productData,
            config
        );
        // console.log(data)

        dispatch({
            type: VIDEO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: VIDEO_CREATE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}
import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { videoCreateReducer, videoGetreducer } from "./reducer/videoReducer"


const reducer = combineReducers({
    video: videoGetreducer,
    videos: videoCreateReducer,
})

let initialStage = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
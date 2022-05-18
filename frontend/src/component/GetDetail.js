import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getVideo } from '../action/videoAction'
import Videos from "./Videos.js"

const GetDetail = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { error, loading, video } = useSelector((state) => state.video)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        dispatch(getVideo())
    }, [alert, dispatch, error])
    return (
        <Fragment>
            {loading ? "something went wrong" : (
                <Fragment>
                    <Fragment>
                        {video
                            && video.map((item) => (
                                <Videos key={item._id} item={item} />
                            ))}
                    </Fragment>
                </Fragment>
            )}
        </Fragment>
    )
}

export default GetDetail
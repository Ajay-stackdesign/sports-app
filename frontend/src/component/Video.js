import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, createProduct, createVideo } from '../action/videoAction'

const Video = () => {
    const navigate = useNavigate
    const dispatch = useDispatch()
    const alert = useAlert()
    const { error, success, loading } = useSelector((state) => state.videos)
    const [categories, setCategories] = useState("")
    const [videos, setVideos] = useState([])
    const [videosPreview, setVideosPreview] = useState([])

    const category = [
        "cricket",
        "kabaddi",
        "football"
    ]


    const handleSubmit = (e) => {
        e.preventDefault()
        const myForm = new FormData()

        myForm.set("categories", categories)
        videos.forEach((video) => {
            myForm.append("videos", video);
        });
        dispatch(createProduct(myForm))
    }

    const createVideoChange = (e) => {
        const files = Array.from(e.target.files);//Array from creates a copy of an array

        setVideos([]);
        setVideosPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setVideosPreview((old) => [...old, reader.result]);
                    setVideos((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (success) {
            alert.success("Video added successFully")
            navigate("/video/get")
        }
    }, [alert, dispatch, error, navigate, success])
    return (
        <Fragment>
            <form encType='multipart/form-data' onSubmit={handleSubmit} >
                <div>

                    <select onChange={(e) => setCategories(e.target.value)}>
                        <option value="">Choose Category</option>
                        {category.map((cate) => (
                            <option key={cate} value={cate}>
                                {cate}
                            </option>
                        ))}
                    </select>
                </div>
                <input
                    type="file"
                    name="avatar"
                    accept=".mp4"
                    onChange={createVideoChange}
                    multiple
                />
                <button
                    id="createProductBtn"
                    type="submit"
                    disabled={loading ? true : false}
                >
                    Create
                </button>
            </form>
        </Fragment>
    )
}

export default Video
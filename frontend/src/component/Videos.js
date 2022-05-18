import React, { Fragment } from 'react'

const Videos = ({ item }) => {
    return (
        <Fragment>
            <h1>{item.categories}</h1>
            <video loop="" autoplay="" muted="" poster="https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/12145465_444078379115659_399268826_n.jpg" class="life-one-photo-video" data-reactid=".0.0.$5.0">
                <source src={item.video[0].url} />
            </video>
        </Fragment>
    )
}

export default Videos
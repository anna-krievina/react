import React from "react";
import './Videos.css';

// @ts-ignore
function Video ({url}) {
    return (
        <iframe src={url}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                rel="noreferrer"
        />
    );
}

function Videos() {
    return (
        <div>
            <Video url="https://www.youtube.com/embed/ZRtdQ81jPUQ" />
            <Video url="https://www.youtube.com/embed/F1JTlnHGa90" />
            <Video url="https://www.youtube.com/embed/ABS-mlep5rY" />
        </div>
    );
}

export default Videos;
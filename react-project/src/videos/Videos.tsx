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
        />
    );
}

function Videos() {
    const pictures = [];
    let stringTest = "3";
    return (
        <div>
            <Video url="https://www.youtube.com/embed/ZRtdQ81jPUQ" />
            <Video url="https://www.youtube.com/embed/F1JTlnHGa90" />
            <Video url="https://www.youtube.com/embed/xCGu5Z_vaps" />
        </div>
    );
}

export default Videos;
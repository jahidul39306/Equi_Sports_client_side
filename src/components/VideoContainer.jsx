import ReactPlayer from 'react-player';
import { Slide } from "react-awesome-reveal";


const VideoContainer = () => {
    return (
        <Slide>
            <div className="container mx-auto">
                <figure className='w-full h-[200px] md:h-[400px] lg:h-[700px]'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=xuas_Yc7VNQ' controls={true} width="100%" height="100%" />
                </figure>
            </div>
        </Slide>
    );
};

export default VideoContainer;
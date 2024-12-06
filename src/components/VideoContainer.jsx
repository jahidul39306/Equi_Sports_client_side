import ReactPlayer from 'react-player';

const VideoContainer = () => {
    return (
        <div className="container mx-auto">
            <figure className='w-full h-[200px] md:h-[400px] lg:h-[700px]'>
                <ReactPlayer url='https://www.youtube.com/watch?v=xuas_Yc7VNQ' controls={true} width="100%" height="100%"/>
            </figure>
        </div>
    );
};

export default VideoContainer;
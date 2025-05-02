interface SoundCloudSrc {
    embed: string
}

const SoundCloudFrame = (props: SoundCloudSrc) => {
    return (
        <div className="flex-shrink-0 scroll-mx-4 max-w-xl" >
            <iframe className="h-96 flex-shrink-1 max-w-xl rounded-xl shadow" width="100%" height="100%" allow="autoplay" src={props.embed}></iframe>
        </div>
    ) 
};

export default SoundCloudFrame;

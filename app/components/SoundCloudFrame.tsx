interface SoundCloudSrc {
    embed: string
}

const SoundCloudFrame = (props: SoundCloudSrc) => {
    return (
        <>
            <iframe className="h-96 flex-shrink-1 max-w-xl rounded-xl shadow" width="100%" height="100%" allow="autoplay" src={props.embed}></iframe>
        </>
    ) 
};

export default SoundCloudFrame;

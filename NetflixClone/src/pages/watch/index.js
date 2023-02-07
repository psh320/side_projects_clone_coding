import { PageWrap } from "../../components/common/styled"
import ReactPlayer from "react-player"
import { useState } from "react"
const Watch = () => {
    const [mute, setMute] = useState(true)
    const unmute = () => {
        setMute = (false)
    }
    return (
        <PageWrap>
            <ReactPlayer 
                url="https://www.youtube.com/watch?v=igxszthKCv4"
                playing={true}
                muted={mute}
                width="100%"
                height="100%"
                controls={true}
                onStart={unmute}
                volume="1"
            />
        </PageWrap>
    )
}

export default Watch;
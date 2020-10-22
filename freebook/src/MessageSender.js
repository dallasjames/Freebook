import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"

function MessageSender() {
    const [input, setInput] = useState('')
    const [imgURL, setImgURL] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        setInput('')
        setImgURL('')
    }

    return (
        <div className="message_sender">
            <div className="message_sender_top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className="message_sender_input"
                        placeholder="What's on your mind?" 
                    />
                    <input 
                        value={imgURL}
                        onChange={(e) => setImgURL(e.target.value)}
                        placeholder="Image URL (Optional)" 
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="message_sender_bottom">
                <div className="message_sender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="message_sender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="message_sender_option">
                    <InsertEmoticonIcon style={{ color: "yellow" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

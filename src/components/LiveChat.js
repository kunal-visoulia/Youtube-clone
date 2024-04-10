import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/liveChatRandomMsgGenerator";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // mimics API Polling

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20) + " 🚀",
                })
            );
        }, 2000);
        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className='border border-black ml-2 mr-5 w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map(msg => (
                    <ChatMessage name={msg.name} message={msg.message} />
                ))}
            </div>
            <form className="w-full p-2 ml-2 border border-black"
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addMessage({
                            name: "DG RAGA",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <input
                    className="px-2 w-96"
                    type="text"
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}
                />
                <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>
        </>
    )
}

export default LiveChat
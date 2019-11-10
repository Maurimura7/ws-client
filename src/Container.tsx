import React from "react";
import "./App.scss";
import ClientList from "./ClientList";
import Chat from "./Chat";

import { useSocket } from "./Socket";
import MessagesStore, { MessageAction } from "./MessageStore";
import { useSession } from "./Session";

const Container: React.FC = props => {
    const { setMe } = useSession();
    const handler = ({ type, payload }: MessageAction) => {
        switch (type) {
            case "WELCOME":
                return setMe(payload.id);

            default:
                break;
        }
    };
    useSocket(handler);

    return (
            <section className="container">
                <MessagesStore>
                    <ClientList />
                    <Chat />
                </MessagesStore>
            </section>
    );
};

export default Container;

import React, { useEffect, useRef, useState } from "react";
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/authContext";
import Message from "./Messages";

export default function ChatRoom() {
    const { user } = useAuth();
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef(null);

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "asc"),
            limit(200)
        );
        const unsub = onSnapshot(q, (snap) => {
            setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        await addDoc(collection(db, "messages"), {
            text: text.trim(),
            uid: user.uid,
            displayName: user.displayName || user.email.split("@")[0],
            photoURL: user.photoURL || null,
            createdAt: serverTimestamp(),
        });
        setText("");
    };

    const handleSignOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={
                            user.photoURL ||
                            "https://avatars.dicebear.com/api/initials/" +
                            (user.displayName || user.email) +
                            ".svg"
                        }
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <div className="font-medium">
                            {user.displayName || user.email}
                        </div>
                        <div className="text-sm text-gray-500">Group Chat</div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleSignOut}
                        className="px-3 py-2 border rounded"
                    >
                        Sign out
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-auto p-4 bg-gray-50">
                <div className="max-w-3xl mx-auto space-y-4">
                    {messages.map((m) => (
                        <Message key={m.id} message={m} mine={m.uid === user.uid} />
                    ))}
                    <div ref={bottomRef} />
                </div>
            </main>

            <form onSubmit={sendMessage} className="p-4 bg-white border-t">
                <div className="max-w-3xl mx-auto flex gap-2">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type a message"
                        className="flex-1 p-3 border rounded"
                    />
                    <button className="px-4 py-3 bg-blue-600 text-white rounded">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

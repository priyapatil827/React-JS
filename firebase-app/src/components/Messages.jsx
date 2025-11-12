import React from "react";

export default function Message({ message, mine }) {
    const dateString = message.createdAt?.toDate
        ? message.createdAt.toDate().toLocaleString()
        : "";
    return (
        <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
            <div
                className={`${mine ? "bg-blue-600 text-white" : "bg-white"
                    } p-3 rounded-lg shadow max-w-xl`}
            >
                <div className="flex items-center gap-2 mb-1">
                    {message.photoURL ? (
                        <img
                            src={message.photoURL}
                            alt="a"
                            className="w-7 h-7 rounded-full"
                        />
                    ) : null}
                    <div className="text-sm font-medium">{message.displayName}</div>
                </div>
                <div className="text-sm">{message.text}</div>
                <div className="text-xs text-gray-400 mt-1 text-right">
                    {dateString}
                </div>
            </div>
        </div>
    );
}

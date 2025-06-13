"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import Markdown from 'react-markdown'

const ChatAssistant = () => {
    const { messages, input, handleInputChange, handleSubmit, status } = useChat();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (status === "streaming") {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [status])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen, status]);



    return (
        <>
            <div className="fixed bottom-6 right-6 z-50" >
                {!isOpen && (
                    <button
                        id='chat-button'
                        onClick={() => setIsOpen(true)}
                        className="bg-black hover:bg-gray-900 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-white border border-black rounded-full animate-pulse"></div>
                    </button>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-black rounded-2xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-black text-white p-4 flex items-center justify-between border-b border-gray-800">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Wyn Assistant</h3>
                                <p className="text-xs opacity-70">Wynbiz Marketing</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/10 p-1 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex w-full ${message.role === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                <div
                                    className={`flex items-start space-x-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                                        }`}
                                >
                                    {/* Avatar */}
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.role === 'user'
                                            ? 'bg-white'
                                            : 'bg-gray-900 border border-gray-800'
                                            }`}
                                    >
                                        {message.role === 'user' ? (
                                            <User className="w-4 h-4 text-black" />
                                        ) : (
                                            <Bot className="w-4 h-4 text-white" />
                                        )}
                                    </div>

                                    {/* Message Bubble */}
                                    <div
                                        className={`relative px-4 py-3 rounded-2xl shadow-lg ${message.role === 'user'
                                            ? 'bg-white text-black'
                                            : 'bg-gray-900 text-white border border-gray-800'
                                            }`}
                                    >
                                        {/* Message tail */}
                                        <div
                                            className={`absolute top-4 w-3 h-3 transform rotate-45 ${message.role === 'user'
                                                ? 'bg-white -right-1'
                                                : 'bg-gray-900 border-l border-t border-gray-800 -left-1'
                                                }`}
                                        />

                                        {/* Message content */}
                                        <div className="relative z-10">
                                            <div className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                                                {
                                                    message.role === "user" ? message.content
                                                        : <Markdown >
                                                            {message.content}
                                                        </Markdown>

                                                }
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-900 rounded-2xl px-4 py-2 border border-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <Bot className="w-4 h-4 text-white" />
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-800 bg-black p-4">
                        <form className="flex space-x-2" onSubmit={handleSubmit}>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                placeholder="Ask about our marketing services..."
                                className="flex-1 resize-none border border-gray-700 bg-black text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"



                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-white hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-xl p-2 transition-all duration-200 hover:scale-105"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 mt-2 text-center">
                            Powered by Wynbiz AI Assistant
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatAssistant;
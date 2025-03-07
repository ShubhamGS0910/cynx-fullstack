import { useState } from "react";
import { FaComments, FaTimes, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const ChatSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thank you for reaching out! Our support team will assist you shortly." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-10">
      {/* Floating Chat Button with Responsive Icon Size */}
      {!isChatOpen && (
        <button
          className="bg-blue-600 text-white p-3 sm:p-2 md:p-3 lg:p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() => setIsChatOpen(true)}
        >
          <FaComments className="text-xl sm:text-2xl md:text-2xl lg:text-2xl" />
        </button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden fixed bottom-20 right-6 z-50">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Live Chat Support</span>
            <button onClick={() => setIsChatOpen(false)}>
              <FaTimes size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 h-64 overflow-y-auto flex flex-col space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-200 dark:bg-gray-700 self-start"
                    : "bg-blue-500 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex p-2 border-t border-gray-300 dark:border-gray-600">
            <input
              type="text"
              className="flex-1 p-2 border-none outline-none dark:bg-gray-800 dark:text-white"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-600 text-white p-2 rounded-md" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* External Support Links with Responsive Icons */}
      <div className="flex flex-col space-y-3 mt-3">
        <a
          href="https://wa.me/917083942199"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 sm:p-2 md:p-3 lg:p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-xl sm:text-2xl md:text-2xl lg:text-2xl" />
        </a>
        <a
          href="https://m.me/cynx"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 sm:p-3 md:p-3 lg:p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaFacebookMessenger className="text-xl sm:text-2xl md:text-2xl lg:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default ChatSupport;

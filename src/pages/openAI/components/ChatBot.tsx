import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { PulseLoader } from "react-spinners";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatbotProps = {
  name: string;
  model: string;
  maxTokens: number;
  character: string;
  description: string;
  image: StaticImageData;
  onBack: () => void;
};

export const Chatbot: React.FC<ChatbotProps> = ({
  name,
  model,
  maxTokens,
  character,
  description,
  image,
  onBack,
}) => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayedMessage, setDisplayedMessage] = useState<string>(""); // For word-by-word typing
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus input when chatbot opens
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to the bottom when chatHistory changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  async function handleSendMessage(event?: React.FormEvent<HTMLFormElement>) {
    if (event) {
      event.preventDefault();
    }
    if (!message.trim()) return;

    // Add user message immediately
    const userMessage: Message = { role: "user", content: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage(""); // Clear the input field

    try {
      setIsLoading(true); // Show loading spinner

      const updatedHistory = [...chatHistory, userMessage];
      const APIBody = {
        model,
        messages: character
          ? [
              { role: "system", content: `Act as ${character}.` },
              ...updatedHistory.map((msg) => ({
                role: msg.role,
                content: msg.content,
              })),
            ]
          : updatedHistory.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
        temperature: 0.7,
        max_tokens: maxTokens,
      };

      const result = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(APIBody),
      });

      if (!result.ok) {
        const error = await result.json();
        throw new Error(error.error.message);
      }

      const data = await result.json();
      const assistantResponse = data.choices[0].message.content.trim();

      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantResponse,
        },
      ]);

      // Typing effect for the assistant's message
      setDisplayedMessage(""); // Reset typing animation
      const words = assistantResponse.split(" ");
      let currentMessage = "";
      for (const word of words) {
        currentMessage += `${word} `;
        setDisplayedMessage(currentMessage.trim());
        await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust speed
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form
      className="bg-gray-100 flex h-[700px] flex-col"
      onSubmit={handleSendMessage}
    >
      {/* Header */}
      <header className="flex items-center space-x-4 bg-blue-600 p-4 text-lg font-semibold text-white shadow-md">
        <button onClick={onBack} className="hover:text-gray-200 text-white">
          ←
        </button>
        <Image
          src={image}
          alt={name}
          className="rounded-full"
          width={40}
          height={40}
        />
        <span>{name}</span>
      </header>

      {/* Chat History */}
      <main
        ref={chatContainerRef}
        className="scrollbar-hide flex-1 space-y-4 overflow-y-auto p-4"
      >
        {/* Static Introduction */}
        <div className="flex justify-start">
          <div className="text-gray-800 max-w-[70%] rounded-lg bg-white p-3 shadow-md">
            <p>{description}</p>
          </div>
        </div>

        {/* Dynamic Chat History */}
        {chatHistory.map((entry, index) => (
          <div
            key={index}
            className={`flex ${
              entry.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 shadow-md ${
                entry.role === "user"
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 bg-white"
              }`}
            >
              <p>
                {entry.role === "assistant" &&
                index === chatHistory.length - 1 &&
                isLoading
                  ? displayedMessage // Show typing animation for the last assistant message
                  : entry.content}
              </p>
            </div>
          </div>
        ))}

        {/* Loader for pending assistant response */}
        {isLoading && displayedMessage === "" && (
          <div className="flex justify-start">
            <div className="text-gray-800 max-w-[70%] rounded-lg bg-white p-3 shadow-md">
              <PulseLoader size={8} color="#2563EB" />
            </div>
          </div>
        )}
      </main>

      {/* Input Area */}
      <footer className="border-t border-[#00000077] bg-white p-4 shadow-md dark:bg-black dark:bg-opacity-30">
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 resize-none rounded-lg border border-[#00000077] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black dark:bg-opacity-80 dark:text-white"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </footer>
    </form>
  );
};

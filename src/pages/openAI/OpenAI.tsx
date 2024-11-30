import { useState } from "react";
import { Chatbot } from "~/pages/openAI/components/ChatBot";
import { chatbots, ChatbotInfo } from "~/pages/openAI/data/chatbots";
import Image from "next/image";

export const OpenAI: React.FC = () => {
  const [selectedChatbot, setSelectedChatbot] = useState<ChatbotInfo | null>(
    null,
  );

  if (selectedChatbot) {
    return (
      <div>
        {/* Selected Chatbot */}
        <Chatbot
          name={selectedChatbot.name}
          model={selectedChatbot.model}
          description={selectedChatbot.description}
          maxTokens={selectedChatbot.maxTokens}
          character={selectedChatbot.character}
          image={selectedChatbot.image}
          onBack={() => setSelectedChatbot(null)}
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {chatbots.map((bot) => (
          <div
            key={bot.name}
            onClick={() => setSelectedChatbot(bot)}
            className="flex cursor-pointer flex-col items-center space-y-2 rounded-lg bg-white p-4 text-center shadow-md transition hover:shadow-lg"
          >
            <Image
              src={bot.image}
              alt={bot.name}
              className="rounded-full"
              width={80}
              height={80}
            />
            <h2 className="text-gray-700 text-lg font-semibold">{bot.name}</h2>
            <p className="text-gray-500 text-sm">Model: {bot.model}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

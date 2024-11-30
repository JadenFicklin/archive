import { useState } from "react";

export const OpenAI = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function handleSendMessage() {
    try {
      const APIBody = {
        model: "gpt-4o",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
        max_tokens: 150,
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
      console.log(data);
      setResponse(data.choices[0].message.content.trim());
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setResponse("Failed to fetch response from OpenAI.");
    }
  }

  return (
    <div>
      <h1>Chat with OpenAI</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows={5}
        cols={50}
      />
      <div>
        <button
          onClick={handleSendMessage}
          className="rounded-md bg-blue-500 p-2 text-white duration-150 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

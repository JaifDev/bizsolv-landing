import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const phrases = ["#No Joining Fee #No Subscription Fee"];
  let currentPhraseIndex = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      const newText = currentPhrase.slice(0, text.length + 1);

      setText(newText);

      if (newText === currentPhrase) {
        // If a phrase is fully typed, reset index or loop back to the first phrase
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    }, 100); // Adjust the typing speed (interval) as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, currentPhraseIndex, phrases]);

  return (
    <div className="typing-container">
      <h3>{text}</h3>
    </div>
  );
};

export default TypingAnimation;

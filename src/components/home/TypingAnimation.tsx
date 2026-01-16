import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface TypingItem {
  text: string;
  icon?: ReactNode;
}

interface TypingAnimationProps {
  items: TypingItem[];
  className?: string;
}

export const TypingAnimation = ({
  items,
  className = "",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const currentItem = items[wordIndex % items.length];
  const currentWord = currentItem.text;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const isCurrentWordComplete = displayedText === currentWord;

      if (!isDeleting && !isCurrentWordComplete) {
        // Typing forward
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      } else if (isDeleting && displayedText) {
        // Deleting backward
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      } else if (isCurrentWordComplete && !isDeleting) {
        // Pause before deleting
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && !displayedText) {
        // Move to next word
        setIsDeleting(false);
        setWordIndex(wordIndex + 1);
        setLoopNum(loopNum + (wordIndex === 0 ? 1 : 0));
        setTypingSpeed(500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, wordIndex, isDeleting, currentWord, typingSpeed, loopNum]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {currentItem.icon && (
        <span className="inline-flex">{currentItem.icon}</span>
      )}
      <span>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      </span>
    </motion.span>
  );
};

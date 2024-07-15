const ChatBubble = ({ message, isMine, time }) => {
  // Determine alignment based on whether the message is mine or not
  const alignment = isMine ? "justify-end ml-32" : "justify-start mr-32";

  // Tailwind CSS classes for styling the chat bubble
  const bubbleClasses = ` flex ${alignment} mb-4`;
  const bubbleContentClasses = `relative flex items-end ${
    isMine ? "text-black bg-green-100" : "text-black bg-white "
  } px-4 py-2 rounded-lg`;
  const timeClasses = `text-gray-400 text-xs ${isMine ? "ml-2" : "ml-2"}`;

  return (
    <div className={bubbleClasses}>
      <div className={bubbleContentClasses}>
        <p className="text-sm">
          {message}
          <span className={timeClasses}>
            {new Date(time).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;

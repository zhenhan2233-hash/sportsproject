function Chat() {
    return (
      <>
        <div className="border p-4 rounded-2xl shadow-md w-96 bg-white">
          <h1 className="font-bold text-center">Chat</h1>
        </div>
  
        
        <div className="fixed bottom-35 right-10 flex p-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="border-2 p-2 rounded-l-xl"
          />
          <button className="border-2 p-2 rounded-r-xl bg-blue-500 text-white">
            Send
          </button>
        </div>
      </>
    );
  }
  
  export default Chat;
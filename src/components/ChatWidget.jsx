import { useRef, useEffect } from 'react';
import { FiX, FiSend } from 'react-icons/fi';
import { useState } from 'react';

const WORKER_URL = 'https://rocky-demo-proxy.prasan.workers.dev';

const SUGGESTIONS = [
  'What has Prasan built?',
  'What stack does he use?',
  'Is he open to internships?',
];

export default function ChatWidget({ open, setOpen }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey, I'm Rocky \u2014 a small live demo of the assistant Prasan built. Ask me about him or this site." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = async (text) => {
    const content = text ?? input;
    if (!content.trim() || loading) return;

    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const history = nextMessages
        .filter((m) => m.role !== 'system')
        .slice(-7, -1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, history }),
      });
      const data = await res.json();
      const reply = data.reply || "Sorry, I'm having trouble responding right now.";
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Couldn't reach the server \u2014 try again in a bit." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  if (!open) return null;

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <span className="chat-dot" />
        <div>
          <div className="chat-header-title">Rocky</div>
          <div className="chat-header-sub mono">live demo</div>
        </div>
        <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
          <FiX size={16} />
        </button>
      </div>

      <div className="chat-messages" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role}`}>
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="chat-bubble assistant chat-typing">
            <span /><span /><span />
          </div>
        )}
      </div>

      {messages.length === 1 && (
        <div className="chat-suggestions">
          {SUGGESTIONS.map((s) => (
            <button key={s} onClick={() => send(s)} className="chat-suggestion">
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="chat-input-row">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Rocky something..."
          rows={1}
        />
        <button onClick={() => send()} disabled={loading} aria-label="Send">
          <FiSend size={16} />
        </button>
      </div>
    </div>
  );
}

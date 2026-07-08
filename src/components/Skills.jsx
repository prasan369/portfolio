const items = [
  {
    num: '01',
    title: 'Applied AI & agents',
    desc: 'LangGraph and Groq-based assistants, RAG pipelines, and tool-calling agents that do more than answer trivia.',
  },
  {
    num: '02',
    title: 'Full-stack web',
    desc: 'React front ends backed by FastAPI or PHP, carried from prototype to something actually deployed.',
  },
  {
    num: '03',
    title: 'Models & experimentation',
    desc: 'PyTorch models trained and tuned on Colab GPUs — vision, language, and wherever those two meet.',
  },
];

export default function Skills() {
  return (
    <section id="what-i-do" className="section container">
      <span className="section-label mono">What I do</span>
      <div className="whatido-list">
        {items.map((i) => (
          <div className="whatido-row" key={i.num}>
            <span className="whatido-num mono">{i.num}</span>
            <div>
              <h3 className="whatido-title">{i.title}</h3>
              <p className="whatido-desc">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

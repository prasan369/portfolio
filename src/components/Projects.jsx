const projects = [
  {
    name: 'Rocky',
    year: '2026',
    status: 'Active',
    desc: 'A personal, desktop assistant for Windows — hotkey activation, system-tray presence, Gmail tools, vision, system control, and persistent memory, orchestrated as a LangGraph agent on Groq\u2019s Llama 3.3 70B. You can talk to it in the top right navbar.',
    tags: ['LangGraph', 'Groq', 'Python'],
  },
  {
    name: 'YouTube RAG Chatbot',
    year: '2025',
    status: 'Active',
    desc: 'Ask questions about any YouTube video and get grounded answers. Grew from a notebook experiment into a Manifest V3 Chrome extension backed by FastAPI, HuggingFace embeddings, and Groq.',
    tags: ['FastAPI', 'LangChain', 'Chrome Ext'],
  },
  {
    name: 'Pet Adoption Marketplace',
    year: '2025',
    status: 'Active',
    desc: 'A Facebook-Marketplace-style platform for pet adoption — multi-photo listings, in-app messaging, reporting, and map-based search built on Leaflet and OpenStreetMap.',
    tags: ['PHP', 'MySQL', 'Leaflet.js'],
  },
  {
    name: 'Image Captioning Model',
    year: '2024',
    status: 'Archived',
    desc: 'A ResNet50 encoder paired with an LSTM decoder, trained on the Flickr dataset via Colab\u2019s T4 GPU — my first real crossover between computer vision and NLP.',
    tags: ['PyTorch', 'ResNet50', 'Colab'],
  },
];

export default function Projects() {
  return (
    <section className="section container">
      <span className="section-label mono">Selected work</span>
      <h2 className="section-title">Things I have fully built.</h2>
      <div className="work-list">
        {projects.map((p) => (
          <div className="work-row" key={p.name}>
            <div className="work-row-top">
              <span className="work-year mono">{p.year}</span>
              <h3 className="work-name">{p.name}</h3>
              <span className={`work-status mono ${p.status === 'Archived' ? 'faint' : ''}`}>{p.status}</span>
            </div>
            <p className="work-desc">{p.desc}</p>
            <div className="work-tags">
              {p.tags.map((t) => (
                <span className="work-tag mono" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

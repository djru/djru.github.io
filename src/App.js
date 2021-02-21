import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [grow, setGrow] = useState(false);
  useEffect(() => {
    setGrow(true);
  }, []);
  return (
    <div className={grow ? "card grow" : "card"}>
      <h1>Dan Ruswick</h1>
      <h2>👋🏼 Hi! I'm Dan, a software engineer from Chicago!</h2>
      <p>
        I work at Trading Technologies, providing tools and infrastructure to
        traders and investment firms. At my job, I mainly work in{" "}
        <span className="black">Python</span> and{" "}
        <span className="black">React</span>. On the side, I've picked up Go and
        Node as well!
      </p>
      <p>
        In my free time I like to watch basketball, read, and ride my bike (at
        least when the Chicago weather cooperates 😄).
      </p>
      <p>
        Feel free to reach out on{" "}
        <a href="https://linkedin.com/in/danrus">Linkedin</a> or check out my{" "}
        <a href="https://github.com/djru">Github</a> if you'd like to connect!
      </p>
    </div>
  );
}

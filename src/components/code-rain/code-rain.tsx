import { useEffect, useState } from "react";
import styles from "./code-rain.module.css";

interface CodeStyle {
  left: string;
  animationDelay: string;
  opacity: number;
}

export default function CodeRain() {
  const codeStrings = [
    "<div>",
    "function()",
    "const",
    "let",
    "var",
    "return",
    "class",
    "import",
    "export",
    "{...}",
    "async",
    "await",
    "=>",
    "[]",
    ".map()",
    "useState",
    "useEffect",
    "</>",
  ];

  const [codeStyle, setCodeStyle] = useState<CodeStyle[]>([]);

  useEffect(() => {
      const generatedStyles = codeStrings.map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.1,
      }));
      setCodeStyle(generatedStyles);
  }, []);

  return (
    <div className={styles.codeRainContainer}>
      {codeStrings.map((code, index) => (
        <div
          key={index}
          className={styles.codeString}
          style={codeStyle[index]} // Usa os estilos gerados no cliente
        >
          {code}
        </div>
      ))}
    </div>
  );
}

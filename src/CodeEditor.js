import React, { useState } from 'react';
import 'prismjs/themes/prism.css';
import Editor from 'react-simple-code-editor';
import { Highlight, Prism as PrismRenderer } from 'prism-react-renderer';
import Prism from 'prismjs/components/prism-core';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const highlightCode = (code) => (
    <Highlight Prism={PrismRenderer} code={code} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '10px', overflowX: 'auto' }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  return (
    <div style={{ margin: '20px', fontFamily: 'monospace' }}>
      <div
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          background: 'linear-gradient(135deg, #3494e6, #ec6ead)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15), inset 0px 0px 20px rgba(255, 255, 255, 0.5)',
        }}
      >
        <label style={{ marginRight: '10px', color: '#fff', textShadow: '0px 0px 10px #fff' }}>Code Editor:</label>
        <Editor className="customEditor"
          value={code}
          onValueChange={handleCodeChange}
          highlight={highlightCode}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: 'transparent',
            color: '#fff',
            boxShadow: 'none',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;

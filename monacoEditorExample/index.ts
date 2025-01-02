import * as monaco from 'monaco-editor';

// エディタを初期化
monaco.editor.create(document.getElementById('editor-container') as HTMLElement, {
  value: `function helloWorld() {\n  console.log("Hello, world!");\n}`,
  language: "cpp",
  theme: 'vs-dark',
});

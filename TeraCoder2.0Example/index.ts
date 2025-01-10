import * as monaco from 'monaco-editor';

// Monaco Editorを初期化
const editor = monaco.editor.create(document.getElementById('editor-container') as HTMLElement, {
  value: `function helloWorld() {\n  console.log("Hello, world!");\n}`,
  language: "cpp",
  theme: 'vs-dark',
});

// 保存ボタンを取得
const saveButton = document.getElementById('save-button') as HTMLButtonElement;

// 保存ボタンのクリックイベントを設定
saveButton.addEventListener('click', () => {
  // Monaco Editorの内容を取得
  const code = editor.getValue();

  // Blobを作成してファイルとしてダウンロード
  const blob = new Blob([code], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  // ダウンロードリンクを生成
  const a = document.createElement('a');
  a.href = url;
  a.download = 'code.txt';
  document.body.appendChild(a);
  a.click();

  // リソースを解放してリンクを削除
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

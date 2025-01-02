#開始

<p>cd monacoEditorExample</p>
<p>docker build -t teracoder2.0:latest .</p>
<p>docker container run -it -d -p 9000:9000 --name teracoder2.0 teracoder2.0</p>

#終了
<p>docker container stop teracoder2.0</p>
<p>docker container rm teracoder2.0</p>

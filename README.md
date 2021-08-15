# Clipboard html to markdown
クリップボードのhtmlをmarkdownに変換するChrome拡張

## 経緯
Teams の 共有リンクをコピーすると、URLだけでなくリッチな html もクリップボードに入る。
それを Markdown でも使いたかった。

## 使い方
1. `git clone` or ダウンロード
1. 拡張をインストール
1. (必要に応じて) ショートカットキー設定
	- `chrome://extensions/shortcuts`
		- `拡張機能を有効にする`
			- 拡張アイコンをクリックする場合と同じ
			- ポップアップがでる
		- `クリップボードのhtmlをmarkdownに変換`
			- backgroundで処理する
			- ポップアップは出ない
1. html がクリップボードに入っている状態で以下のいずれかを実行
	- 拡張アイコンをクリック
	- `3` で設定したショートカットキーを押下
1. クリップボードにHTMLが存在する場合は、markdownに変換してクリップボードを上書き

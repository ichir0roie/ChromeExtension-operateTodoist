# utils

自作したchromeExtensionをまとめて管理するリポジトリ。

## delete chrome add

※2024/01/08:適当なcss拡張機能で十分に実現可能だった。

chromeの検索結果広告をすべて非表示にする。
<https://github.com/ichir0roie/ChromeExtensionUtils/tree/main/.docs/deleteChromeAdd>

## operate todoist

+ todayページを開くとadd task buttonをクリックするエクステンション｡

<https://chrome.google.com/webstore/detail/todoist-for-chrome/jldhpllghnbhlbpcmnajkpdmadaolakh/related>
このエクステンションなんか良いかもしれないが､
+ 必要なアクション数が多い
+ 重い

<https://developer.todoist.com/rest/v1/#adding-a-new-project>
これ使った簡単なスクリプトを実行できる軽くて無料のプラットフォームがあったらそっちで実装する予定。
↓

### ベータ

<https://easy-todoist.ichir0roie.com/>
Aleph.jsを使用してREST APIを呼び出すような機能を実装した。
最小限の機能のみ。

以下のパスを使用すれば誰でも使用できる。
<https://easy-todoist.ichir0roie.com/run/?token=Todoistの設定から取得できるAPIトークン>
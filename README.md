# utils

chrome使用時に改造したいと思ったページに関してはここに機能を追加していく。



## operate todoist

ホントはapiとか使ってかっこよく実装すれば書かのかもしれんけど､
todoistのタスク追加をワンアクションでできるようにしたかった｡

todayページを開くとadd task buttonをクリックするエクステンション｡


<https://chrome.google.com/webstore/detail/todoist-for-chrome/jldhpllghnbhlbpcmnajkpdmadaolakh/related>
このエクステンションなんか良いかもしれんけど､どうしてもOneアクション必要になってしまう｡

デスクトップ版はショートカットが設定から使えるようにできるけど､デスクトップ版を入れられないときとか｡

スマホもosやhomeアプリの種類によってはいい感じにできるが､入力はやっぱりpcからのほうが早い｡

<https://developer.todoist.com/rest/v1/#adding-a-new-project>
これ使った簡単なスクリプトを実行できる軽くて無料のプラットフォームがあったらそっちで実装しようかな｡


### ベータな

<https://easy-todoist.ichir0roie.com/>
Aleph.jsを使用してREST APIを呼び出すような機能を実装した。
最小限の機能のみ。

以下のパスを使用すれば誰でも使用できるよ。
<https://easy-todoist.ichir0roie.com/run/?token=Todoistの設定から取得できるAPIトークン>
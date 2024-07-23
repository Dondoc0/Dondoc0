{
   "date": "2024-07-08T16:53:44+09:00",
   "draft": false,
   "slug": "delete-google-photos",
   "tags": [
      "Javascript"
   ],
   "title": "Google Photoの画像を一括削除"
}
気がつけば、Googleドライブの使用量が、無料枠の15GBすべてを使い切っていました。

私はGoogle Pixel 3aあたりからずっとPixelユーザなので、少なくとも2019年からスマートフォンで撮った写真はずっとGoogleドライブを圧迫し続けているわけです。

Gyazo Proを契約しているので、Googleフォトから写真と動画をすべてエクスポートし、ひたすらGyazoにアップロードしていました。

ちなみにGyazoにアップロードすることで、プライベートの写真を全世界に公開することになるんじゃないの？という心配があるかと思いますが、それに関してはGyazo公式で以下のような見解が出されています。

[Gyazoは会社で使えない？誤解の解説とセキュアなGyazoTeamsのご紹介｜スクショ撮影ならGyazo Teams](https://note.com/gyazo_teams/n/n2809f2590926)

> Gyazoは画像をアップロードすると自動で `https://gyazo.com/64ad3...` のような32桁のIDを含むURLを発行します。IDは0〜9とa〜fの16種類の文字で構成されていて、すべてのIDは16の32乗で340,282,366,920,938,463,463,374,607,431,768,211,456通りです。Gyazoは現在約10億枚（1,000,000,000枚）の画像を保管していますので、ランダムにIDを入力すると0.00000000000000000000000000029%の確率で画像を見つけることができます。数学的に見て、Gyazoの正しいIDを推測するのが非常に困難であることが分かります。またGyazoではDoS攻撃への対策もとられているため、大量のアクセスを通じてIDを割り出すことは不可能です。

だそうです。どうせScrapboxに日記を書き溜めていたときは画像はGyazoに上げられていたわけだし、今更騒ぐことでもないかなと思いGyazoに投げることにしました。だって、98%、犬の画像だし。

で、バックアップは無事できたのですが、Googleフォトの画像を削除しなければなりません。そこでGoogleフォトの設定画面を覗いて画像の一括削除がないか探しました。**ありませんでした。**

まさか！一枚一枚選択して削除しないといけないのお～！？そんなの嫌すぎる！助けてドラえも～ん！！！

[mrishab/google-photos-delete-tool: Tool for deleting all photos from the Google Photos](https://github.com/mrishab/google-photos-delete-tool)

いました、私のドラえもんが。なんとGoogleフォトを一括削除してくれるJavascriptを配布してくれているではありませんか！

早速試してみたのですが、うまくいかない。画像を複数枚チェックするところはうまくいくのですが、ゴミ箱ボタンを押してDeleteを実行するところでコケていました。

れどめを読むと英語版のGoogleフォトで実行してね★と書いてあり、ちゃんと英語版でやってます。何かがおかしいなと思って調べると、Delete実行のSelectorが私の環境だとちょっと違うのが原因でした。

[![Image from Gyazo](https://i.gyazo.com/9c979317c9288888e580cca0f50558fe/thumb/480.png)](https://gyazo.com/9c979317c9288888e580cca0f50558fe)

```javascript
confirmationButton: '#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.V639qd.bvQPzd.oEOLpc.Up8vH.J9Nfi.A9Uzve.iWO5td > div.XfpsVe.J9fJmf > button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.nCP5yc.kHssdc.HvOprf'
```

ここを画像の手順でゲットしたセレクターに置換したら動くようになりました。

ちなみに一部書き換えをすれば日本語版Googleフォトでも動くらしいです。気になる方はググってみてね。

めでたしめでたし。
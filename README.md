# About
このリポジトリは、Udemyのコース受講に伴い作成しました。

[Learn Three.js using React: Build a 3D Tesla Workshop 2021
](https://www.udemy.com/share/104Ct83@7FFx29034boURdXQki33lt8t6M_J76zii02ZpEPI5k2tWDq_H7QaYj7w_zqc0JR2Uw==/)

ただし、コースで扱っているライブラリのバージョンは、現行のバージョンに比べて古いため、ある程度リファクタリングしています。<br>
また、コースではJavaScriptでコーディングしていますが、私は受講時に**TypeScript**を使用しました。

# Results
コースで作成したアプリケーションです。

https://nemutas.github.io/udemy-r3f/

見た目上大きく違うのは、色を変えたりカメラターゲットを切り替えるコントローラーです。コントローラーの外観はコースの趣旨に関係なかったので、簡単に実装できる[leva コントローラー](https://github.com/pmndrs/leva)を使用しました。

# 3D Model
3Dモデルは、[Sketchfab](https://sketchfab.com/)からダウンロードしています。

* [Tesla Model 3](https://skfb.ly/6QTVO)
* [Tesla Model S](https://skfb.ly/6QZu9)
* [Veribot](https://skfb.ly/6QYR6)

※ コースでは、8-25で[Mech Drone](https://skfb.ly/LMro)を使用していますが、正常に読み込めなかったため、Veribotを代わりに使用しました。<br>
※ コースで扱っているモデルは、無料でダウンロードできますが、クリエイター様に最大限の感謝を！

# Impressions
React Three Fiberの学習教材はかなり珍しく、このコース以外にあるのだろうか？というレベルです。<br>
なので、「少しでもいいから得られる情報があれば儲けもの」くらいの心持ちで受講してみました。（セール時に買って1500円程度だったので）

受講後の感想ですが、<br>
Aboutで書いた通り、使用しているライブラリのバージョンが古いので、現在のバージョンで受講しようとすると、どうしても参照できないプロパティや何やらがありリファクタリングしていく必要があります。<br>
しかし、「現在のバージョンだとどのように書けるか」調査していく必要があり、ドキュメントを読むいいきっかけになったと思います。

個人的にはもう少し §7 pstprocessing を掘り下げて欲しかったです。

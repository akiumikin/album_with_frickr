# album_with_frickr

## 環境立ち上げ

・Dockerfileとdocker-compose.ymlを用意する（リポジトリ内を参照）  
・docker-compose up -d　で立ち上げる  
（初回起動時にはイメージ作成やbundle, npm iなど結構時間かかるので注意）  

```
起動：docker-compose up -d
（仮にメインプロセスを落としたらもう一回する）
停止：docker-compose down
attach：docker attach <名称>
コンテナに入る：docker exec -ti <名称>　/bin/bash

attachから抜ける：ctrl+pの後にctrl+c
```

# 課題
## 環境
Ruby 2.6.×  
Rails 5.2.×  
Mysql 5.7  
React(パッケージ管理はnpmを使用してください)  
→ create-react-app を使わずに必要なパッケージのみをインストール。コンパイルにはwebpackを使用  
Node 8.15.1
npm 6.4.1  

## 仕様
### 外部仕様
-アルバム一覧ページの作成  
-アルバム一覧を見ることできる  
-アルバム作成することができる  
-名前と画像を保存することができる  
-アルバム作成と同時に画像(複数枚)保存することができる  
-アルバムを削除することができる  
-アルバム内の画像を削除することができる  

### コード側仕様  
-アルバムの作成、更新フォームはコンポーネントととして作成し同一のjsコードで作成、更新の切り替えをできるようしてください  
-flickr(フリー画像サイト)からAPIを使用して検索・取得してくださいAPI(frickr)を叩く処理に関してはReact側で実装してください。フロント側は全てReactで実装をしてください。

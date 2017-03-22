# js-study
This repository is for studing Javascript.

## 実行環境
* Node.jsがインストールされたMacまたはLinux(CentOS)
  * ※Windowsは後述する「パッケージ自動生成」のみ使用不可

## パッケージ自動生成方法
* プロジェクト直下にディレクトリを移動
```
cd ${js-studyプレジェクトディレクトリ}
```
* 生成コマンドを実行（引数にはパッケージ名を指定）
```
sh pkginit.sh ${生成するパッケージ名}
```

## npmコマンド集
* build
  * コードフォーマット & テスト実行 & es5への変換を実施します
  ```
  npm run build
  ```
* watch
  * srcディレクトリ及び、indexjsを監視し、変更があればbuildコマンドを実行します。
  ```
  npm run watch
  ```
* start
  * buildされたファイルをnodeで実行します。
  ```
  npm run start
  ```
* lint
  * eslintを使ってコードチェック及び指定されたフォーマットに整形します。
  ```
  npm run lint
  ```
* test
  * mochaを使ったテストを実行します。testディレクトリ配下が対象です。
  ```
  npm run test
  ```

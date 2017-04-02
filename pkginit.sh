#!/bin/bash

function err {
  echo "エラーメッセージを確認して下さい。処理を終了します。"
}

function chkDirToExec {
  # 実行ディレクトリのチェック
  if [ ! -e ".skeleton" ]; then
    echo "js-study直下で実行して下さい"
    err
    exit 1
  fi
}

function chkArgs {
  if [ -z "${1}" ]; then
    echo "引数にパッケージ名を指定して下さい"
    err
    exit 1
  fi
}

function mkPkgDir {
  dir="${1}"
  if [ -e ${dir} ]; then
    echo "パッケージディレクトリは既に存在します"
    err
    exit 1
  fi
  echo "パッケージディレクトリを作成します。 ${dir}"
  mkdir "${dir}"
  if [ $? != 0 ]; then
    err
    exit 1
  fi
}

function copyFile {
  dir="${1}"
  echo "スケルトンをコピーします。 ${dir}"
  cp -rp .skeleton/* "${dir}"
  cp -p .skeleton/.babelrc "${dir}"
  cp -p .skeleton/.eslintrc.json "${dir}"
  if [ $? != 0 ]; then
    err
    exit 1
  fi
}

function repPkgName {
  pkgdir="${1}"
  pkg_name="${2}"
  echo "パッケージ名を${pkg_name}に置換します。"
  sed -i ".bak" -e "s/skeleton/${pkg_name}/g" "${pkgdir}/package.json"
  rm "${pkgdir}/package.json.bak"
}

function npmInstall {
  echo "npmパッケージをインストールします。"
  npm i
}

function typingsInstall {
  echo "typingsをインストールします。"
  $(npm bin)/typings install
}

echo "パッケージ生成処理を開始します。"

# 実行ディレクトリチェック
chkDirToExec
# 引数チェック
chkArgs $@

# パッケージ名、ディレクトリ
pkg_name="${1}"
pkgdir=`echo "${pkg_name}" | sed -e "s/[ 　]/_/g"`

# ディレクトリ作成
mkPkgDir "${pkgdir}"
# スケルトンからファイルをコピー
copyFile "${pkgdir}"
# package.jsonのパッケージ名を修正
repPkgName "${pkgdir}" "${pkg_name}"

cd "${pkgdir}"

# npm install
npmInstall

# typings install
typingsInstall

echo "パッケージ生成が完了しました。処理を終了します。"

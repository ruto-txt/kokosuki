import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Panels from '../components/panels.js'
import React,{useState,useCallback, useMemo} from 'react'
// import PanelsState from '../components/panels-state.js'

export default function Home(){
    const [history, sethistory] = useState([]);
    const change = []
    function synchistory(arr){
        useMemo(()=>sethistory(history.push[arr]),change)//sethistory(history.push[arr]);
    }

    return (
    <Layout>
        <Head>
            <title>ここすきチェッカー</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1 className="title">ここすきチェッカー</h1>
        </header>
        <main>
            <h2>{history}</h2>
            <Link href="/damii"><a>＞ダミーリンク＜</a></Link>
            <Panels value={change}>メインのpanel</Panels>
            <section>
                <p>プレビューエリア</p>
                <div id="preview1">
                    <span>プレビュー</span>
                    <div>↑</div><div>↓</div>
                </div>
                <div id="preview2">
                    <span>プレビュー</span>
                    <div>↑</div><div>↓</div>
                </div>
            </section>
            <div>シェアボタンエリア</div>
        </main>
        <footer>フッター</footer>
    
    <style jsx>{`
    .title{
        text-align: center;
    }
    `}
    </style>
    </Layout>
    )}

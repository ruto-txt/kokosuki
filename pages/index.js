import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Panels from '../components/panels.js'

export default function Home(){
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
            <h2>なんか書く</h2>
            <Link href="/damii"><a>＞ダミーリンク＜</a></Link>
            <Panels>メインのpanel</Panels>
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

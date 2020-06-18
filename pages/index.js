import Head from 'next/head'
import Link from 'next/link'

export default function Home(){
    return (
    <div className="container">
        <Head>
            <title>ここすきチェッカー</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1>ここすきチェッカー</h1>
        </header>
        <main>
            <h2>なんかやろうぜ</h2>
            <Link href="/damii"><a>＞ダミーリンク＜</a></Link>
            <div>メインのpanel</div>
            <div>解説文</div>
            <div>
                プレビューエリア
                <div>プレビュー</div>
                <div>プレビュー</div>
            </div>
            <div>シェアエリア</div>
        </main>
        <footer>フッター</footer>
    </div>)
}

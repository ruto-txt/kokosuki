import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Panels from '../components/panels.js'
import React,{useState,useMemo} from 'react'
// import PanelsState from '../components/panels-state.js'

function Test(props){
    return (
        <>
        <button onClick={()=>props.onClick(1)}>てすと１</button>
        <button onClick={()=>props.onClick(2)}>てすと２</button>
        <button onClick={()=>props.onClick(3)}>てすと３</button>
        </>
        )
}

export default function Home(){
    const [history, sethistory] = useState([[0,0]]);
    const [test,setTestState]=useState()

    function testmethod(props){
        test?setTestState():setTestState(props)
    }

    const current = useMemo(()=>history[0],[history])
    const identify=useMemo(()=>{
        const category = current[0]
        const item = current[1]
        if(!category&&!item){
            return "reception"
        }else if(category&&!item){
            return "category"
        }else if(category&&item){
            return "current"
        }
        return "reception"
        },[current])

    function handleSetSelectState(input,state){
        // const category = state[0]
        // const item = state[1]
        // let update =[null,null]
        // //現在の状態を確認する
        // //無選択状態なら、カテゴリに代入する
        // if(!category&&!item){
        //     update=[input,null]
        // }else if(category&&!item){
        //     //カテゴリ状態なら、一致していれば未選択に戻す。していなければ細目に代入する
        //     if(category==input){
        //         update=[null,null]
        //     }else{
        //         update=[category,input]
        //     }
        // }else if(category&&item){
        //     //細目状態なら、一致していれば確定する。していなければ細目を上書きする。戻るなら戻る
        //     if(category==input){
        //         update=[null,null]
        //     }else if(item==input){
        //         alert("うんこが"+[category,item]+"kg出ましたｗｗｗｗ")
        //         update=[null,null]
        //         sethistory(update)
        //         return [category,item]
        //     }else{
        //         update=[category,input]
        //     }
        // }else{update=[null,null]}

        sethistory(state)
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
            <h2>test:{test}</h2>
            <h3>{history[history.length-1]}={current}→{identify}</h3>
            <Test onClick={local=>{testmethod(local)}}></Test>
            <Link href="/damii"><a>＞ダミーリンク＜</a></Link>
            <Panels identify={identify} selected={current} onClick={()=>handleSetSelectState}>
                メインのpanel</Panels>
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

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Panels from '../components/panels.js'
import React,{useState,useMemo} from 'react'
// import PanelsState from '../components/panels-state.js'
import Preview from '../components/preview.js';

function Test(props){
    return (
        <>
        <button onClick={()=>props.onClick([1,1])}>てすと１</button>
        <button onClick={()=>props.onClick([2,2])}>てすと２</button>
        <button onClick={()=>props.onClick([3,3])}>てすと３</button>
        </>
        )
}

export default function Home(){
    const [history, sethistory] = useState([]);
    // const current = useMemo(()=>history.length>1?history[history.length-1]:[null,null],[history])
    const [current,setcurrent]=useState([null,null])

    
    const [test,setTestState]=useState([])
    function testmethod(props){
        const a = test.slice()
        a.push(props)
        setTestState(a)
        console.log(a)
    }


//問題：historyに入ってるのが「未確定のcurrent状態」なのか「入力された状態」なのか今のやり方だと分からない
//A　入力状況を管理して見分ける（current、入力街、アレ）＝＞なんかバグって表示がおかしくなったときバグり続ける？
//B　current変数を追加する＝＞どう変更してもヒストリに影響しないので、問題は比較的起こりにくい。冪等？
//　結局、最初の直感が一番正しかったんだなって……


    function handleSetSelectState(input,state){
        const category = state?state[0]:false
        const item = state?state[1]:false
        

        //新しいhistoryの姿を作成して、更新する必要がござる

        //現在の状態を確認する
        //無選択状態なら、カテゴリに代入する
        if(!category&&!item){
            // update=[input,null]
            setcurrent([input,null])
            return
        }else if(category&&!item){
            //カテゴリ状態なら、一致していれば未選択に戻す。していなければ細目に代入する
            if(category==input){
                setcurrent([null,null])
                return
            }else{
                setcurrent([category,input])
                return
            }
        }else if(category&&item){
            //細目状態なら、一致していれば確定する。していなければ細目を上書きする。戻るなら戻る
            if(category==input){
                setcurrent([null,null])
                return
            }else if(item==input){
                alert("うんこが"+[category,item]+"kg出ましたｗｗｗｗ")
                const clone = history.slice()
                clone.push([category,item])
                sethistory(clone)
                setcurrent([null,null])
                return
            }else{
                setcurrent([category,input])
                return
            }
        }
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
            <h3>{history[history.length-1]}={current}</h3>
            <Link href="/damii"><a>＞ダミーリンク＜</a></Link>
            <Panels selected={current}
            onClick={(input,state)=>handleSetSelectState(input,state)}>
                メインのpanel</Panels>
            <Test onClick={local=>{testmethod(local)}}></Test><span>{test}</span>
            <section>
                <p>プレビューエリア</p>
                <Preview state={history}></Preview>

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

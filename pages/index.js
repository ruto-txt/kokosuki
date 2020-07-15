import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Forms from '../components/forms.js'
import Panels from '../components/panels.js'
import React,{useState} from 'react'
// import PanelsState from '../components/panels-state.js'
import Preview from '../components/preview.js';

export default function Home(){
    const [history, sethistory] = useState([]);
    // const current = useMemo(()=>history.length>1?history[history.length-1]:[null,null],[history])
    const [current,setcurrent]=useState([null,null])
    const objects={
        1:{'id':1,'label':"hako1"},
        2:{'id':2,'label':"hako2"},
        3:{'id':3,'label':"hako3"},
        4:{'id':4,'label':"hako4"},
        5:{'id':5,'label':"hako5"},
        6:{'id':6,'label':"hako6"},
        7:{'id':7,'label':"hako7"},
        8:{'id':8,'label':"hako8"},
        9:{'id':9,'label':"hako9"},
    }

    function swapStateArr(arr,index){
        //子要素ナンバーより前の要素を抜き取る
        let localArr = arr.slice(0,index)

        //子要素ナンバーを差し込む
        localArr.splice(index-1,0,arr[index])

        //子要素ナンバーより後の要素を追加する
        localArr=localArr.concat(arr.slice(index+1))

        sethistory(localArr)
    }
    
    function deleteStateArr(arr,index){
        let localArr = arr.slice(0,index)//子要素ナンバーより前の要素を抜き取る
        localArr=localArr.concat(arr.slice(index+1))//子要素ナンバーより後の要素を詰めて追加する
        sethistory(localArr)//上書きする
    }

    function handleSetSelectState(input,state){
        const category = state?state[0]:false
        const item = state?state[1]:false
        
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
            <section>
                {history.length<1?<p>プレビューエリア</p>:
                <Preview history={history} objects={objects}
                funcSwap={(index)=>swapStateArr(history,index)}
                funcDel={index=>deleteStateArr(history,index)}/>}
            </section>
            <section>
                <Forms></Forms>
                <div>シェアボタンエリア</div>
                {/* <Link href="/damii"><a>＞ダミーリンク＜</a></Link> */}
            </section>
            <section>
                <Panels selected={current} objects={objects}
                onClick={(input,state)=>handleSetSelectState(input,state)}>メインのpanel</Panels>
            </section>
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

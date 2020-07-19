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
    const [current,setcurrent]=useState([null,null])
    // const objects={
    //     1:{'id':1,'label':"hako1"},
    //     2:{'id':2,'label':"hako2"},
    //     3:{'id':3,'label':"hako3"},
    //     4:{'id':4,'label':"hako4"},
    //     5:{'id':5,'label':"hako5"},
    //     6:{'id':6,'label':"hako6"},
    //     7:{'id':7,'label':"hako7"},
    //     8:{'id':8,'label':"hako8"},
    //     9:{'id':9,'label':"hako9"},
    // }
    
const object={
    1:{'label':"世界観",'explanatory':"物語の舞台や背景が印象的だったときに。\n重要アイテムなども含まれます",
        'children':{
            1:{'label':"舞台",'explanatory':"魅力的な世界だった"},
            2:{'label':"ガジェット",'explanatory':"小道具、重要アイテムや武器などが印象的だった"},
            3:{'label':"時代感",'explanatory':"文化や人々の気風、考え方などが時代感に即していた"},
            4:{'label':"人々",'explanatory':"背景に息づく人々が魅力的だった"},
            5:{'label':"壮大さ",'explanatory':"風景や世界の広がりに圧倒された"},
            6:{'label':"テクノロジー",'explanatory':"その世界を支える技術体系が好みだった"},
            7:{'label':"重要な設定",'explanatory':"想像の広がる素敵な設定が印象的だった"},
            8:{'label':"リアリティ",'explanatory':"本当にありそう、と思わせるリアリティが印象的だった"},
        },
    },
    2:{'label':"キャラクター",'explanatory':"誰か特定の登場人物に対する感想",
        'children':{
            1:{'label':"親近感",'explanatory':"他人事に思えないキャラがいる、普通の人が頑張っている姿が魅力的だった"},
            2:{'label':"憧れる",'explanatory':"かっこいい、存在感の輝くキャラクターがいた"},
            3:{'label':"かわいい",'explanatory':"理屈じゃない。kawaiiは世界を制する。"},
            4:{'label':"ギャップ",'explanatory':"二面性が魅力なキャラクターがいた"},
            5:{'label':"能力・職業",'explanatory':"キャラクターの能力や特徴がたまらなくツボだった"},
            6:{'label':"安心感",'explanatory':"そのキャラクターがいるだけで安心する、安心と信頼の安定感"},
            7:{'label':"デザイン",'explanatory':"キャラクターの外見的な特徴などがとてつもなくツボだった"},
            8:{'label':"個性",'explanatory':"真似できない、他では見られない、輝く個性を持つキャラクターだと感じた"},
        },
    },
    3:{'label':"ストーリー",'explanatory':"物語全体について",
        'children':{
            1:{'label':"盛り上がり",'explanatory':"見応えのあるストーリーだった"},
            2:{'label':"テンポの良さ",'explanatory':"読みやすいストーリーだと感じた"},
            3:{'label':"緩急",'explanatory':"ストーリーの緩急に惹きつけられた"},
            4:{'label':"期待に応える",'explanatory':"読んでいて気持ちいいストーリーだった"},
            5:{'label':"もどかしい",'explanatory':"先を読ませるストーリーだった"},
            6:{'label':"安定感",'explanatory':"安心して読み進められるストーリーだった"},
            7:{'label':"予想外",'explanatory':"アッと驚かされるストーリーだった"},
            8:{'label':"感動",'explanatory':"感動で胸がいっぱいになるようなストーリーだった"},
        }
    },
    4:{'label':"描写",'explanatory':"地の文や文体、全体の雰囲気づくりについて",
        'children':{
            1:{'label':"表現力",'explanatory':"感情が伝わってくる描写だった"},
            2:{'label':"テンポ",'explanatory':"スラスラと読んでいける描写だった"},
            3:{'label':"空気感",'explanatory':"描かれる雰囲気や空気感が魅力的だった"},
            4:{'label':"比喩",'explanatory':"うまいことを言う表現が印象的だった"},
            5:{'label':"躍動感",'explanatory':"動きが伝わってくるような描写だった"},
            6:{'label':"ウィット",'explanatory':"ウィットに富む、とんちのきいた表現が見事だった"},
            7:{'label':"臨場感",'explanatory':"まるでその場に居合わせているかのような迫力を感じた"},
            8:{'label':"語彙",'explanatory':"多彩な表現が印象的だった"},
        }
    },
    5:{'label':"関係性",'explanatory':"2人以上のキャラクターが生み出す化学反応の魅力",
        'children':{
            1:{'label':"かけ合い",'explanatory':"キャラクターのかけ合いが魅力的だった"},
            2:{'label':"組み合わせ",'explanatory':"コンビやチームだからこそ生まれる魅力があった"},
            3:{'label':"微笑ましい",'explanatory':"彼らが一緒にいるだけで温かい気持ちになる"},
            4:{'label':"笑える",'explanatory':"一緒にいるだけで面白いキャラたちがいたときに"},
            5:{'label':"安定感",'explanatory':"彼らが一緒だと安心する、そんな組み合わせが印象的だった"},
            6:{'label':"スマート",'explanatory':"デキるキャラたちに痺れた"},
            7:{'label':"もどかしい",'explanatory':"じれったくなるような関係性が微笑ましかった"},
            8:{'label':"尊い・エモい",'explanatory':"尊い、エモい、言葉にならない"},
        }
    },
    6:{'label':"シーン",'explanatory':"作品における「あの場面」に関すること",
        'children':{
            1:{'label':"盛り上がり",'explanatory':"あるシーンの盛り上がりが格別だった"},
            2:{'label':"構図",'explanatory':"事件やキャラクターの関係図がたまらなかった"},
            3:{'label':"スリリング",'explanatory':"ハラハラするシーンが印象に残った"},
            4:{'label':"どんでん返し",'explanatory':"物語が大きく動くシーンが印象的だった"},
            5:{'label':"爽快",'explanatory':"スカッとするシーンが印象的だった"},
            6:{'label':"感動",'explanatory':"泣いてしまうようなシーンがあった"},
            7:{'label':"予想外",'explanatory':"驚かされたシーンがあった"},
            8:{'label':"尊い・エモい",'explanatory':"尊い、エモい、言葉はいらない"},
        }
    },
    7:{'label':"メタ",'explanatory':"作品の位置づけや、作り手の巧みさ",
        'children':{
            1:{'label':"流行",'explanatory':"人気のジャンルをきっちりと押さえていた"},
            2:{'label':"独自性",'explanatory':"他にない魅力をしっかりと持っている"},
            3:{'label':"風刺",'explanatory':"社会や世の中の風刺を作品に落とし込んでいる"},
            4:{'label':"テーマ性",'explanatory':"テーマ性の強い、考えさせられる内容だった"},
            5:{'label':"問題提起",'explanatory':"何かについて語りたくなるような作品だった"},
            6:{'label':"アイデア",'explanatory':"アイデアに技ありな作品だった"},
            7:{'label':"納得感",'explanatory':"違和感を覚えさせない、巧みなつくりをしていた"},
            8:{'label':"期待に応える",'explanatory':"読者の気持ちに応える作品づくりだと感じた"},
        }
    },
    8:{'label':"読後感",'explanatory':"ページの終わりに行き着いた瞬間、ふっと思い浮かぶその感情",
        'children':{
            1:{'label':"清々しい",'explanatory':"気持ちのいい終わり方だった"},
            2:{'label':"楽しい",'explanatory':"楽しい気持ちで読み終えられた"},
            3:{'label':"怖い",'explanatory':"ゾクッとする結末がたまらなかった"},
            4:{'label':"モヤモヤする",'explanatory':"なんともいえない不思議な終わり方をした"},
            5:{'label':"しんみり",'explanatory':"深く心にしみ入るような読後感があった"},
            6:{'label':"切ない",'explanatory':"心がギュッとする切ない結びだった"},
            7:{'label':"続きが",'explanatory':"続きが読みたい"},
            8:{'label':"笑える",'explanatory':"笑いとともに読み終わった"},
        }
    },
    9:{'label':"雰囲気",'explanatory':"なんともいえない、全体から醸し出される「良さ」",
        'children':{
            1:{'label':"透明感",'explanatory':"透明感が魅力的だった"},
            2:{'label':"色彩感",'explanatory':"色鮮やかな華やかさを感じた"},
            3:{'label':"儚さ",'explanatory':"消えていまいそうな印象だった"},
            4:{'label':"力強さ",'explanatory':"迫力やいきいきとした溌剌さを感じた"},
            5:{'label':"ダーク",'explanatory':"不気味さや不穏さに彩られていた"},
            6:{'label':"重厚",'explanatory':"重厚な雰囲気、重々しい深みを感じた"},
            7:{'label':"ほのぼの",'explanatory':"心が優しくなるような穏やかさがあった"},
            8:{'label':"テーマ",'explanatory':"統一感を持って描かれた魅力があった\n「和風」「大正ロマン」など"},
        }
    }
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
        <main className="grid-container">
            <h2 className="header">{history} / {current}</h2>
            <section>
                {history.length<1?<p>プレビューエリア</p>:
                <Preview history={history} objects={object}
                funcSwap={(index)=>swapStateArr(history,index)}
                funcDel={index=>deleteStateArr(history,index)}/>}
            </section>
            <section>
                <div>シェアボタンエリア</div>
                <Forms/>
                {/* <Link href="/damii"><a>＞ダミーリンク＜</a></Link> */}
            </section>
            <section>
                <Panels selected={current} objects={object}
                onClick={(input,state)=>handleSetSelectState(input,state)}>メインのpanel</Panels>
            </section>
        </main>
        <footer>フッター</footer>
    <style jsx>{`
    .grid-container{
        display:grid;
        grid-template-columns:1fr 1fr;
        align-content:space-around;
    }
    .title{
        text-align: center;
    }
    .header{
        grid-column:1/3;
    }
    `}
    </style>
    </Layout>
    )}

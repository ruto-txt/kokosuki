import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Forms from '../components/forms.js'
import Panels from '../components/panels.js'
import React,{useState, useMemo,useCallback, useContext} from 'react'   
// import PanelsState from '../components/panels-state.js'
import Preview from '../components/preview.js';

export async function getServerSideProps({query}){
    return{
        props:{query}
    }
}

export default function Home({query}){
    const [history, sethistory] = useState([]);
    const [current,setcurrent]=useState([null,null])

    const inputUrl = query.url?decodeURIComponent(query.url):""
    const inputTitle =query.title?decodeURIComponent(query.title):""

const object={
    1:{'label':"世界観",'explanatory':"物語の舞台や背景が印象的だったときに。\n重要アイテムなども含まれます",
        'children':{
            //親番号
            2:{'label':"舞台",'phrase':"[1]が魅力的な[0]",'explanatory':"魅力的な世界だった"},
            3:{'label':"ガジェット",'phrase':"[0]を引き立てる[1]","explanatory":"小道具、重要アイテムや武器などが印象的だった"},
            4:{'label':"時代感",'phrase':"[1]のある[0]",'explanatory':"文化や人々の気風、考え方などが時代感に即していた"},
            5:{'label':"人々",'phrase':"[0]に息づく[1]",'explanatory':"背景に息づく人々が魅力的だった"},
            6:{'label':"壮大さ",'phrase':"壮大な[0]",'explanatory':"風景や世界の広がりに圧倒された"},
            7:{'label':"テクノロジー",'phrase':"[0]を支える[1]",'explanatory':"その世界を支える技術体系が好みだった"},
            8:{'label':"重要な設定",'phrase':"[0]を形作る[1]",'explanatory':"想像の広がる素敵な設定が印象的だった"},
            9:{'label':"リアリティ",'phrase':"[1]のある[0]",'explanatory':"本当にありそう、と思わせるリアリティが印象的だった"},
        },
    },
    2:{'label':"キャラクター",'explanatory':"誰か特定の登場人物に対する感想",
        'children':{
            1:{'label':"親近感",'phrase':"[1]のある[1]",'explanatory':"他人事に思えないキャラがいる、普通の人が頑張っている姿が魅力的だった"},
            //親番号
            3:{'label':"憧れる",'phrase':"[1][0]",'explanatory':"かっこいい、存在感の輝くキャラクターがいた"},
            4:{'label':"かわいい",'phrase':"[1][0]",'explanatory':"理屈じゃない。kawaiiは世界を制する。"},
            5:{'label':"ギャップ",'phrase':"[1]のある[0]",'explanatory':"二面性が魅力なキャラクターがいた"},
            6:{'label':"能力・職業",'phrase':"魅力的な[1]の[0]",'explanatory':"キャラクターの能力や特徴がたまらなくツボだった"},
            7:{'label':"安心感",'phrase':"[1]のある[0]",'explanatory':"そのキャラクターがいるだけで安心する、安心と信頼の安定感"},
            8:{'label':"デザイン",'phrase':"[1]が魅力的な[0]",'explanatory':"キャラクターの外見的な特徴などがとてつもなくツボだった"},
            9:{'label':"個性的",'phrase':"[1]な[0]",'explanatory':"真似できない、他では見られない、輝く個性を持つキャラクターだと感じた"},
        },
    },
    3:{'label':"ストーリー",'explanatory':"物語全体について",
        'children':{
            1:{'label':"盛り上がり",'phrase':"[1]のある[0]",'explanatory':"見応えのあるストーリーだった"},
            2:{'label':"テンポの良さ",'phrase':"テンポのいい[0]",'explanatory':"読みやすいストーリーだと感じた"},
            //親番号
            4:{'label':"緩急",'phrase':"[1]のある[0]",'explanatory':"ストーリーの緩急に惹きつけられた"},
            5:{'label':"期待に応える",'phrase':"[1][0]",'explanatory':"読んでいて気持ちいいストーリーだった"},
            6:{'label':"もどかしい",'phrase':"[1][0]",'explanatory':"先を読ませるストーリーだった"},
            7:{'label':"安定感",'phrase':"[1]のある[0]",'explanatory':"安心して読み進められるストーリーだった"},
            8:{'label':"予想外",'phrase':"[1]な[0]",'explanatory':"アッと驚かされるストーリーだった"},
            9:{'label':"感動",'phrase':"[1]する[0]",'explanatory':"感動で胸がいっぱいになるようなストーリーだった"},
        }
    },
    4:{'label':"描写",'explanatory':"地の文や文体、全体の雰囲気づくりについて",
        'children':{
            1:{'label':"表現力",'phrase':"[1]",'explanatory':"感情が伝わってくる描写だった"},
            2:{'label':"テンポ",'phrase':"[1]",'explanatory':"スラスラと読んでいける描写だった"},
            3:{'label':"空気感",'phrase':"[0]の[1]",'explanatory':"描かれる雰囲気や空気感が魅力的だった"},
            //親番号
            5:{'label':"比喩",'phrase':"[1]",'explanatory':"うまいことを言う表現が印象的だった"},
            6:{'label':"躍動感",'phrase':"[1]のある[0]",'explanatory':"動きが伝わってくるような描写だった"},
            7:{'label':"ウィット",'phrase':"[1]に富んだ[0]",'explanatory':"ウィットに富む、とんちのきいた表現が見事だった"},
            8:{'label':"臨場感",'phrase':"[1]のある[0]",'explanatory':"まるでその場に居合わせているかのような迫力を感じた"},
            9:{'label':"語彙",'phrase':"[0]の[1]",'explanatory':"多彩な表現が印象的だった"},
        }
    },
    5:{'label':"関係性",'explanatory':"2人以上のキャラクターが生み出す化学反応の魅力",
        'children':{
            1:{'label':"かけ合い",'phrase':"[1]",'explanatory':"キャラクターのかけ合いが魅力的だった"},
            2:{'label':"組み合わせ",'phrase':"[1]の妙",'explanatory':"コンビやチームだからこそ生まれる魅力があった"},
            3:{'label':"微笑ましい",'phrase':"[1][0]",'explanatory':"彼らが一緒にいるだけで温かい気持ちになる"},
            4:{'label':"笑える",'phrase':"[1][0]",'explanatory':"一緒にいるだけで面白いキャラたちがいたときに"},
            //親番号
            6:{'label':"安定感",'phrase':"[1]のある[0]",'explanatory':"彼らが一緒だと安心する、そんな組み合わせが印象的だった"},
            7:{'label':"スマート",'phrase':"[1]な[0]",'explanatory':"デキるキャラたちに痺れた"},
            8:{'label':"もどかしい",'phrase':"[1][0]",'explanatory':"じれったくなるような関係性が微笑ましかった"},
            9:{'label':"尊い",'phrase':"[1][0]",'explanatory':"尊い、エモい、言葉にならない"},
        }
    },
    6:{'label':"シーン",'explanatory':"作品における「あの場面」に関すること",
        'children':{
            1:{'label':"盛り上がり",'phrase':"[0]の[1]",'explanatory':"あるシーンの盛り上がりが格別だった"},
            2:{'label':"構図",'phrase':"[0]の[1]",'explanatory':"事件やキャラクターの関係図がたまらなかった"},
            3:{'label':"スリリング",'phrase':"[1]な[0]",'explanatory':"ハラハラするシーンが印象に残った"},
            4:{'label':"どんでん返し",'phrase':"[1]",'explanatory':"物語が大きく動くシーンが印象的だった"},
            5:{'label':"爽快",'phrase':"[1]な[0]",'explanatory':"スカッとするシーンが印象的だった"},
            //親番号
            7:{'label':"感動",'phrase':"[1]する[0]",'explanatory':"泣いてしまうようなシーンがあった"},
            8:{'label':"予想外",'phrase':"[1]な[0]",'explanatory':"驚かされたシーンがあった"},
            9:{'label':"尊い",'phrase':"[1][0]",'explanatory':"尊い、エモい、言葉はいらない"},
        }
    },
    7:{'label':"メタ",'explanatory':"作品の位置づけや、作り手の巧みさ",
        'children':{
            1:{'label':"流行",'phrase':"[1]",'explanatory':"人気のジャンルをきっちりと押さえていた"},
            2:{'label':"独自性",'phrase':"[1]",'explanatory':"他にない魅力をしっかりと持っている"},
            3:{'label':"風刺",'phrase':"[1]",'explanatory':"社会や世の中の風刺を作品に落とし込んでいる"},
            4:{'label':"テーマ性",'phrase':"[1]",'explanatory':"テーマ性の強い、考えさせられる内容だった"},
            5:{'label':"問題提起",'phrase':"[1]",'explanatory':"何かについて語りたくなるような作品だった"},
            6:{'label':"アイデア",'phrase':"[1]",'explanatory':"アイデアに技ありな作品だった"},
            //親番号
            8:{'label':"納得感",'phrase':"[1]がある",'explanatory':"違和感を覚えさせない、巧みなつくりをしていた"},
            9:{'label':"期待に応える",'phrase':"[1]内容",'explanatory':"読者の気持ちに応える作品づくりだと感じた"},
        }
    },
    8:{'label':"読後感",'explanatory':"ページの終わりに行き着いた瞬間、ふっと思い浮かぶその感情",
        'children':{
            1:{'label':"清々しい",'phrase':"[1][0]",'explanatory':"気持ちのいい終わり方だった"},
            2:{'label':"楽しい",'phrase':"[1][0]",'explanatory':"楽しい気持ちで読み終えられた"},
            3:{'label':"怖い",'phrase':"[1][0]",'explanatory':"ゾクッとする結末がたまらなかった"},
            4:{'label':"モヤモヤする",'phrase':"[1][0]",'explanatory':"なんともいえない不思議な終わり方をした"},
            5:{'label':"しんみり",'phrase':"[1]する[0]",'explanatory':"深く心にしみ入るような読後感があった"},
            6:{'label':"切ない",'phrase':"[1][0]",'explanatory':"心がギュッとする切ない結びだった"},
            7:{'label':"続きが",'phrase':"[1]気になる[0]",'explanatory':"続きが読みたい"},
            //親番号
            9:{'label':"笑える",'phrase':"[1][0]",'explanatory':"笑いとともに読み終わった"},
        }
    },
    9:{'label':"雰囲気",'explanatory':"なんともいえない、全体から醸し出される「良さ」",
        'children':{
            1:{'label':"透明感",'phrase':"[1]のある[0]",'explanatory':"透明感が魅力的だった"},
            2:{'label':"鮮やか",'phrase':"[0]さを感じる[0]",'explanatory':"色鮮やかな華やかさを感じた"},
            3:{'label':"儚い",'phrase':"[1][0]",'explanatory':"消えていまいそうな印象だった"},
            4:{'label':"力強い",'phrase':"[1][0]",'explanatory':"迫力やいきいきとした溌剌さを感じた"},
            5:{'label':"ダーク",'phrase':"[1]な[0]",'explanatory':"不気味さや不穏さに彩られていた"},
            6:{'label':"重厚",'phrase':"[1]な[0]",'explanatory':"重厚な雰囲気、重々しい深みを感じた"},
            7:{'label':"ほのぼの",'phrase':"[1]する[0]",'explanatory':"心が優しくなるような穏やかさがあった"},
            8:{'label':"統一感",'phrase':"[1]のある[0]",'explanatory':"統一感を持って描かれた魅力があった\n「和風」「大正ロマン」など"},
            //親番号
        }
    }
}

    const swapStateArr=useCallback((arr,index)=>{
        //子要素ナンバーより前の要素を抜き取る
        let localArr = arr.slice(0,index)

        //子要素ナンバーを差し込む
        localArr.splice(index-1,0,arr[index])

        //子要素ナンバーより後の要素を追加する
        localArr=localArr.concat(arr.slice(index+1))

        sethistory(localArr)
    })

    const deleteStateArr=useCallback((arr,index)=>{
        let localArr = arr.slice(0,index)//子要素ナンバーより前の要素を抜き取る
        localArr=localArr.concat(arr.slice(index+1))//子要素ナンバーより後の要素を詰めて追加する
        sethistory(localArr)//上書きする
    })

    const handleSetSelectState=useCallback((input,state)=>{
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
    })

    const inquiryText=useCallback(arr=>{
        const category = object[arr[0]]
        const item = category.children[arr[1]]
        const text = item.phrase.replace("[0]",category.label).replace("[1]",item.label)
        return text
        // return category.label + "の" + item.label
    })
    

    return (
        <>
        <Head>
            <title>ここすきチェッカー</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1 className="title">ここすきチェッカー</h1>
        </header>
        <main className="grid-container">
            <h2 className="header">{history} / {current}</h2>
            <section className="preview">
                {history.length<1?<p>プレビューエリア</p>:
                <Preview history={history} funcInquiry={(arr)=>inquiryText(arr)}
                funcSwap={(index)=>swapStateArr(history,index)} funcDel={index=>deleteStateArr(history,index)}>
                </Preview>}
            </section>
            <section className="panels">
                <Panels selected={current} objects={object}
                onClick={(input,state)=>handleSetSelectState(input,state)}>メインのpanel</Panels>
            </section>
            <section className="share">
                <div>シェアボタンエリア</div>
                <Forms url={inputUrl} title={inputTitle}/>
                {/* <Link href="/damii"><a>＞ダミーリンク＜</a></Link> */}
            </section>
        </main>
        <footer>フッター</footer>
        <style jsx>{`
        .title{
            text-align: center;
        }
        @media(min-width: 992px){
        .grid-container{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:0px 30px;
            align-content:space-between;
        }
            .header{
                grid-column:1/ span 2;
                justify-self:center;
            }
            .preview{
                margin:1rem 0px 0px 0px;
                order:2;
            }
            .share{
                order:3;
                align-self:start;
            }
            .panels{
                grid-row:2/ span 2;
                order:1;
            }
        }
        `}
        </style>
        </>
    )}

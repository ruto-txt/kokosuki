import { useState } from 'react'


const Test = () =>{
    const [state, setstate] = useState(0);
   

    return (
        <>
        <div className={state!=texts.length-1?"textbox":""}>{texts[state]}</div>
        <div className="grid-container">
            {state==0?<span className="btn"></span>:<button className="btn" onClick={()=>setstate(state-1)}>前</button>}
            <LoopDots flag={state}></LoopDots>
            {state==texts.length-1?<span className="btn"></span>:<button className="btn" onClick={()=>setstate(state+1)}>次</button>}
        </div>
        <ImgSwitch flag={state} max={texts.length-1}></ImgSwitch>
        <style jsx>{`
            :global(img) {
                width:100%;
            }
            .textbox{
                height:10em;
            }
            .grid-container{
                display:grid;
                width:50%;
                align-items:center;
                justify-items: center;
                grid-template-columns:repeat(${texts.length+4},1fr);
            }
            @media(min-width: 768px){
                .grid-container{
                        width:30%;;
                }
            }
            .btn{
                grid-column:span 2;
            }
        `}</style>
        </>
    )
}

export default Test

const LoopDots = (props)=>{
    const flag = props.flag
    return <>{texts.map((arg,i)=>flag==i?<small key={i}>●</small>:<small key={i}>○</small>)}</>
}

const ImgSwitch = (props)=>{
    const flag = props.flag
    if(flag>=props.max){return <div>最後の画像はデプロイアドレス取得後でないと無理かな～</div>}
    if(flag==4){return <img src="../../GIF 2020-08-20 22-19-22.gif"></img>}
    if(flag==3){return <img src="../../GIF 2020-08-20 22-06-06.gif"></img>}
    return <img src="../../GIF 2020-08-15 13-33-20.gif"/>
}

const texts = [
    <><h3>あなたの感想を支援するツールです</h3><p>感想文を作る、あるいは自分のなかから感想を掘り起こすための補助線として役立ちます</p></>,
    <><p>ジャンルをひとつ選択すると、関連するキーワードが8つ提示されます</p><p>あなたの感覚に最も近いものを選択してください</p></>,
    <><p>これを3回程度繰り返すと、なんだか簡単な箇条書きの感想文っぽいものが出来上がります</p><p>完成！！！　素晴らしい！</p></>,
    //ハードコーディング。。。
    <><p>作成されたフレーズは一覧に表示されます</p><p>作成したフレーズは並べ替えたり、削除したりできます</p></>,
    <><p>すぐシェアできるようにプレビューイメージが表示されます。タイトルやURLを入力できます</p>
    <p>ちなみに、フレーズ文だけをクリップボードにコピーすることも可能です</p></>,
    <><h3>作者向けのグレイトフル機能！</h3><p>読者に簡単に感想をシェアしてもらいたい！　そんな願いを叶えるため、情報入力済みURLを発行できる機能を実装しました。</p>
    <p>詳細情報を入力してURL発行をクリック。表示されたURL、またはHTMLタグをコピーして利用しましょう！</p></>
]








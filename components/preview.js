import React,{useState} from 'react'
import MediaQuery from 'react-responsive';

function Preview(props){
    const [isOpen, setIsOpen] = useState(null);
    const objects=props.objects
    const history=props.history
    //モバイルファーストで考えると、ツールチップを横に表示するのはクソなので、上手に隠す必要があります
    //なのでその辺を条件付きレンダーします
    //モバイル版特別の仕様として、タップで操作オプションが展開されるツールチップを実装します
    //クリックする→開閉stateが発火する→該当行のしたに一行gridが追加される
    
    //コンポジションでうんちゃらこんちゃらできそうなのでやってみよう
    //理想：モバイル版/ＰＣ版のコンポーネントを書き込む
    //書き込まれたコンポーネントからは、各々の場合での状態を返す。モバイル版ではクリックイベントつき。
    function DivApportion(props){
         return(<>
         <div key={props.id} className="grid-container">
            <MediaQuery query="(min-width:768px)">
                <div className="main-block">大画面向け表示 {props.text}</div>{props.children}
            </MediaQuery>
            <MediaQuery query="(max-width:767px)">
                {isOpen==props.id?
                    <><div className="main-block mb" onClick={()=>setIsOpen(null)}>スマホ向け表示 open {props.text}</div>
                    <div></div>{props.children}</>:
                    <div className="main-block mb" onClick={()=>setIsOpen(props.id)}>スマホ向け表示 closed {props.text}</div>
                }
            </MediaQuery>
        </div>
            <style jsx>{`
                .grid-container{
                    display:grid;
                    grid-template-columns:1fr 30px 30px 30px;
                    margin:5px 10px;
                    gap:5px;
                    align-items:center;
                }
                .main-block{
                    border : 1px solid;
                    background:skyblue;
                    padding:0% 8px;
                    transition-timing-function: cubic-bezier(1,0,0,1)
                }
                .mb{
                    grid-column:1/5;
                }
                `}</style>
            </>)
    }

    function ArrowBlock(props){
        return <>
        {props.index==0?<div className="arrow-block-non grid1">↑</div>
        :<button className="arrow-block grid1" onClick={()=>{setIsOpen(null);props.funcSwap(props.index)}}>↑</button>}
        {props.index==history.length-1?<div className="arrow-block-non grid2">↓</div>
        :<button className="arrow-block grid2" onClick={()=>{setIsOpen(null);props.funcSwap(props.index+1)}}>↓</button>}
        <div className="delete-block grid3" onClick={()=>props.funcDel(props.index)}>×</div>
        <style jsx>{`
        .arrow-block{
            text-align:center;
            background:pink;
        }
        .arrow-block-non{
            text-align:center;
            background:gray;
        }
        .delete-block{
            text-align:center;
            background:tomato;
        }
        .grid1{grid-column:2;}
        .grid2{grid-column:3;}
        .grid3{grid-column:4;}
        `}</style>
    </>}

    return (<>
    {props.history.map((valueHistNum,index)=>
        <DivApportion key={index+1} id={index+1} text={objects[valueHistNum[0]].label+"の、子要素"+valueHistNum[1]}>
            <ArrowBlock index={index} funcSwap={(arg)=>{props.funcSwap(arg)}} funcDel={(arg)=>props.funcDel(arg)}/>
        </DivApportion>
        )}
    </>)
}



export default Preview
import React,{useState} from 'react'

function Preview(props){
    const [isOpen, setIsOpen] = useState(false);
    const objects=props.objects

    //モバイルファーストで考えると、ツールチップを横に表示するのはクソなので、上手に隠す必要があります
    //なのでその辺を条件付きレンダーします
    //モバイル版特別の仕様として、タップで操作オプションが展開されるツールチップを実装します
    //クリックする→開閉stateが発火する→該当行のしたに一行gridが追加される
    
    //コンポジションでうんちゃらこんちゃらできそうなのでやってみよう

    function DetailsDiv(props){
        if(isOpen){
            if(props.id==isOpen){
                return (
                    <div onClick={()=>setIsOpen([false])}>
                    {objects[props.valueHistNum[0]].label}の、子要素{props.valueHistNum[1]}　オープン
                    </div>
                )}
            return (
                <div onClick={()=>setIsOpen(props.id)}>
                    {props.id}{objects[props.valueHistNum[0]].label}の、子要素{props.valueHistNum[1]}　クローズ
                </div>)
        }else{
            return (
                <div onClick={()=>setIsOpen(props.id)}>
                    {props.id}{objects[props.valueHistNum[0]].label}の、子要素{props.valueHistNum[1]}　クローズ
                </div>
            )}

    }

    return (<>
    <div className="grid-container">
        <div className="main-block" onClick={()=>{alert(false==0)}}>テストブロック</div><div></div><div></div><div></div>
        <div className="main-block">テストブロック</div><div></div><div></div><div></div>
    </div>
    {props.history.map((valueHistNum,index)=>
        <div key={index + valueHistNum} className="grid-container">
            <DetailsDiv valueHistNum={valueHistNum} id={index+1}>
                {objects[valueHistNum[0]].label}の、子要素{valueHistNum[1]}</DetailsDiv>
            {index==0?<div className="arrow-block-non">↑</div>:
                <button className="arrow-block" onClick={()=>props.funcSwap(index)}>↑</button>}
            {index==props.history.length-1?<div className="arrow-block-non">↓</div>:
                <button className="arrow-block" onClick={()=>props.funcSwap(index+1)}>↓</button>}
            <div className="delete-block" onClick={()=>props.funcDel(index)}>×</div>
        </div>
        )}
    <style jsx>{`
    .grid-container{
        display:grid;
        grid-template-columns:1fr 30px 30px 20px;
        margin:5px 10px;
        gap:5px;
        align-items:center;
    }
    .main-block{
        border : 1px solid;
        background:skyblue;
        padding:0% 8px;
    }
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
    `}</style>
    </>)
}


function DetailsDiv(props){
    const [isOpen, setisOpen] = useState(false);
    if(isOpen){
            return (
                <div onClick={()=>setisOpen(!isOpen)}>
                {props.children}　オープン{isOpen}
                </div>
            )
    }else{
        return (
            <div onClick={()=>setisOpen(!isOpen)}>
                {props.children}　クローズ{isOpen}
            </div>
        )}

}

export default Preview
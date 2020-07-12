function Preview(props){
    //上に並べ替えるのを返すときの返し
    //多分普通にリフトアップしないといけないね

    //表示する文字をどこから拾ってくるかって言うと上位なんだよなぁ
    const objects=props.objects

    //一番上、または一番下のときは表示を変えるやつ

    //grid line でアレを描くと良きね
    return (<>
    {props.history.map((valueHistNum,index)=>
        <div className="grid-container">
            <div className="main-block">{objects[valueHistNum[0]].label}の、子要素{valueHistNum[1]}</div>
            {index==0?<div className="arrow-block-non">↑</div>:
                <button className="arrow-block" onClick={()=>props.funcSwap(index)}>↑</button>}
            {index==props.history.length-1?<div className="arrow-block-non">↓</div>:
                <button className="arrow-block" onClick={()=>props.funcSwap(index+1)}>↓</button>}
            <div className="delete-block" onClick={()=>props.funcDel(index)}>×</div>
        </div>)}
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

export default Preview
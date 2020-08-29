import React,{useState, useCallback, useMemo} from 'react'
import MediaQuery from 'react-responsive';

function Preview(props){
    const [isOpen, setIsOpen] = useState(null);
    const history=useMemo(()=>props.history,[props.history])

    const ArrowBlock=React.memo((props)=>{
        return <>
        {props.index==0?<div className="arrow-block-non">↑</div>
        :<button className="arrow-block" onClick={()=>{setIsOpen(null);props.funcSwap(props.index)}}>↑</button>}
        {props.index==props.lastLength?<div className="arrow-block-non">↓</div>
        :<button className="arrow-block" onClick={()=>{setIsOpen(null);props.funcSwap(props.index+1)}}>↓</button>}
        <div className="delete-block" onClick={()=>props.funcDel(props.index)}>×</div>
        <style jsx>{`
        *{
            cursor:pointer;
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
    </>})

    return (<>
        {history.map(
            (hisArr,index)=>
            <div key={hisArr+index} className="grid-container">
            <MediaQuery query="(min-width:768px)">
                <div className="main-block">{props.funcInquiry(hisArr)}</div>
                <ArrowBlock funcSwap={(arg)=>{props.funcSwap(arg)}} funcDel={(arg)=>props.funcDel(arg)}
                index={index} lastLength={history.length-1}/>
            </MediaQuery>
            <MediaQuery query="(max-width:767px)">
                {isOpen==index+1?
                    <><div className="main-block mb" onClick={()=>setIsOpen(null)}>{props.funcInquiry(hisArr)}</div>
                    <div>{/* グリッドコンテナ用のダミー要素…… */}</div><ArrowBlock funcSwap={(arg)=>{props.funcSwap(arg)}} funcDel={(arg)=>props.funcDel(arg)} index={index} lastLength={history.length-1}/></>:
                    <div className="main-block mb" onClick={()=>setIsOpen(index+1)}>{props.funcInquiry(hisArr)}</div>
                }
            </MediaQuery>
        </div>
        )}
        <style jsx>{`
            .grid-container{
                display:grid;
                grid-template-columns:1fr 30px 30px 30px;
                margin:5px 10px;
                gap:5px;
                align-items:center;
                opacity: 0;
                animation: 1s fadeIn forwards;
            }
            @keyframes fadeIn { /* ←追加 */
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .main-block{
                border : 1px solid skyblue;
                padding:0% 8px;
            }
            .mb{
                grid-column:1/5;
            }
            `}</style>
    </>)
}



export default Preview
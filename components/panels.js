import React,{useMemo} from 'react';

/*
*　9ボックスパネル
    DBから内容を入れて項目に利用するかもしれないので、そのような設計を心がける
    状態によって表示を変える
    */
export function Panels(props){
    const objects=props.objects
    
    const selected = props.selected
    const identify=useMemo(()=>{
        const category = selected[0]
        const item = selected[1]
        if(!category&&!item){
            return "reception"
        }else if(category&&!item){
            return "category"
        }else if(category&&item){
            return "current"
        }
        return "reception"
        },[selected])
    

    const SelectState = ()=>{
        const category = selected[0]
        const item = selected[1]
        if(identify=="current"){
            return <div>{item +"の"+ objects[category].label + "が選択されています"}</div>
        }else if(identify=="category"){
            return <div>{objects[category].label + "からふさわしいものを選んでください"}</div>
        }else{
            return <div>{"カテゴリを選んでください"}</div>
        }
    }
    
    function disprayLabel(key){
        const category = selected[0]
        const cateLabel =objects[key].label
        
        if(identify=="reception"){//未選択の時
            return <span>{cateLabel}</span>
        }else{
            const itemLabel =objects[category].label + "の" + key

            //カテゴリ選択のとき
            if(identify=="category"){
                return key==category?<span>{cateLabel} <br/>＜戻る</span>:<span>{itemLabel}</span>
            }
            //細目選択中のとき
            if(key==selected[1]){
                    return <span>{itemLabel} <br/>を選択</span>
            }else if(key==selected[0]){
                return <span>{cateLabel} <br/>＜戻る</span>
            }
            return <span>{itemLabel}</span>
        }
    }

    function calcClassName(key){
        if(identify=="reception"){
            return "reception"
        }else if(identify=="current"){
            if(key==selected[1]){return "current"}
        }
        return key==selected[0]?"categoryBack":"category"
    }

    return (
        <>
        <SelectState/>
        <div className="grid-container">
            {Object.keys(objects).map(key=>
                <button key={objects[key].id} id={objects[key].id} className={calcClassName(key)}
                onClick={()=>props.onClick(objects[key].id,selected)}>
                    <span>{disprayLabel(key)}</span>
                </button>
            )}
        </div>
        <div><p id="description">{props.children}、ステートテスト：{selected}</p></div>
        <style jsx>{`
            .grid-container{
                display:grid;
                margin:5px;
                grid-template-columns:repeat(3,minmax(100px,1fr));
                gap:10px;
                grid-template-rows:minmax(80px,1fr);
                align-items:center;
            }
            .grid-container>button{
                text-align:center;
                padding-bottom:90%;
                border-radius: 10px;
                position: relative;
            }

            .grid-container>button>span{
            /* height: 100px; */
            position: absolute;
            width:90px;
            top: 50%;
            left: 50%;
            -webkit-transform : translate(-50%,-50%);
            transform : translate(-50%,-50%);
        }

            .reception{
                background:skyblue;
            }
            .category{
                transition:0.4s;
                background:pink;
            }
            .categoryBack{
                transition:0.4s;
                background:#444;
                color:whitesmoke;
            }
            .current{
                transition:0.2s;
                background:salmon;
            }
        `}
        </style>
        </>
    )
}

export default Panels


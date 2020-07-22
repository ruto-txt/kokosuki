import React,{useMemo, useCallback} from 'react';

/*
*　9ボックスパネル
    DBから内容を入れて項目に利用するかもしれないので、そのような設計を心がける
    状態によって表示を変える
    */
export function Panels(props){
    const objects=props.objects
    
    const selected = useMemo(()=>props.selected,[props.selected])
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
    

    const SelectState = useCallback(()=>{
        const category = objects[selected[0]]
        const item = selected[1]>selected[0]?selected[1]-1:selected[1]
        var text
        if(identify=="current"){
            text=<>{category.label}から{category.children[item].label}が選択されています<br/><small>{category.children[item].explanatory}</small></>
        }else if(identify=="category"){
            text=<>{category.label}からふさわしいものを選んでください<br/><small>{category.explanatory}</small></>
        }else{
            text="カテゴリを選んでください"
        }
        return (
        <>
            <p>{text}</p>
            <style jsx>{`
                p{
                    margin:0 1em;
                    height:4rem;
                }
            `}
            </style>
        </>)
    })
    
    const disprayLabel=useCallback((key)=>{
        const category = selected[0]
        const cateLabel =objects[key].label
        
        if(identify=="reception"){//未選択の時
            return <span>{cateLabel}</span>
        }else{
            //親番号のパネルは早期リターン
            if(key==category){return <span>{cateLabel} <br/>＜戻る</span>}

            //イテレータのkeyで、childrenの8つの内容にアクセスする
            let callnum = category<key?key-1:key
            const itemLabel =objects[category].children[callnum].label

            //細目選択中ならちょっと文字を変える
            return key==selected[1]?
            <span>{itemLabel} <br/>を選択</span>:<span>{itemLabel}</span>
        }
    })

    const calcClassName=useCallback((key)=>{
        if(identify=="reception"){
            return "reception"
        }else if(identify=="current"){
            if(key==selected[1]){return "current"}
        }
        return key==selected[0]?"categoryBack":"category"
    })

    return (
        <>
        <SelectState/>
        <div className="grid-container">
            {Object.keys(objects).map(key=>
                <button key={key} className={calcClassName(key)}
                onClick={()=>props.onClick(key,selected)}>
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


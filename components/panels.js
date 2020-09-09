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
        const item = selected[1]
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
                    height:6em;
                }
            `}
            </style>
        </>)
    })
    
    const disprayLabel=useCallback((key)=>{
        const category = selected[0]
        const cateLabel =objects[key].label
        
        if(identify=="reception"){//未選択の時
            return <>{cateLabel}</>
        }else{
            //親番号のパネルは早期リターン
            if(key==category){return <span>{cateLabel} <br/>＜戻る</span>}

            //イテレータのkeyで、childrenの8つの内容にアクセスする
            const itemLabel =objects[category].children[key].label

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
                <div key={key} className={calcClassName(key)}
                onClick={()=>props.onClick(key,selected)}>
                    <span>{disprayLabel(key)}</span>
                </div>
            )}
        </div>
        <style jsx>{`
            .grid-container{
                display:grid;
                grid-template-columns:repeat(3,1fr);
                grid-template-rows:repeat(3,1fr);
                gap:1em;
                margin:0 3px;
            }
            .grid-container>div{
                border-radius: 10px;
                position:relative;
                cursor:pointer;
            }
            .grid-container>div::before{
                display:block;
                content:"";
                padding-top:100%;
                align-items:center;
            }
            .grid-container>div>span{
                position:absolute;
                top:0;
                left:0;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                white-space: nowrap;
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


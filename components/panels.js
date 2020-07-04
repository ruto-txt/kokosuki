import React,{useState,useMemo} from 'react';

/*
*　9ボックスパネル
    DBから内容を入れて項目に利用するかもしれないので、そのような設計を心がける
    状態によって表示を変える
    */
export function Panels(props){
    const [selected,setSelect]=useState([null,null]);
    const objects={
        1:{'id':1,'label':"hako1"},
        2:{'id':2,'label':"hako2"},
        3:{'id':3,'label':"hako3"},
        4:{'id':4,'label':"hako4"},
        5:{'id':5,'label':"hako5"},
        6:{'id':6,'label':"hako6"},
        7:{'id':7,'label':"hako7"},
        8:{'id':8,'label':"hako8"},
        9:{'id':9,'label':"hako9"},
    }
    
    const identify=useMemo(()=>{
        const category = selected[0]
        const item = selected[1]
        if(!category&&!item){
            return "reception"
        }else if(category&&!item){
            return "category"
        }else if(category&&item){
            return "current"
        }else{return "reception"}
    },[selected])

    // 1：状態を管理する
    // どんな状態が必要？　今の選択状態（階層の深さ？　選択中の番号？
    // 2：現状の状態によって表示を変える
    // 3：状態を変更する
    // 4：リターンする（できなければsetContentかpropsかな？

    function handleSetSelectState(input,state){
        const category = state[0]
        const item = state[1]
        let update =[null,null]
        //現在の状態を確認する
        //無選択状態なら、カテゴリに代入する
        if(!category&&!item){
            update=[input,null]
        }else if(category&&!item){
            //カテゴリ状態なら、一致していれば未選択に戻す。していなければ細目に代入する
            if(category==input){
                update=[null,null]
            }else{
                update=[category,input]
            }
        }else if(category&&item){
            //細目状態なら、一致していれば確定する。していなければ細目を上書きする。戻るなら戻る
            if(category==input){
                update=[null,null]
            }else if(item==input){
                alert("うんこが"+[category,item]+"kg出ましたｗｗｗｗ")
                update=[null,null]
                setSelect(update)
                return [category,item]
            }else{
                update=[category,input]
            }
        }else{update=[null,null]}

        setSelect(update)
    }
    


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
            // const itemLabel =objects[category][key].label
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
            if(key==selected[1]){
                return "current"
            }
        }
        return key==selected[0]?"categoryBack":"category"
    }

    return (
        <>
        <SelectState/>
        <div className="grid-container">
            {Object.keys(objects).map(key=>
                <div id={objects[key].id} className={calcClassName(key)}
                onClick={()=>handleSetSelectState(objects[key].id,selected)}>
                {disprayLabel(key)}
                </div>
            )}
        </div>
        <div><p id="description">{props.children}、ステートテスト：{selected}</p></div>
        <style jsx>{`
            .grid-container{
                display:grid;
                gap:10px;
                grid-template-columns:repeat(3,minmax(100px,1fr));
                grid-template-rows:minmax(90px,1fr);
                justify-items: center;
                align-items:center;
            }
            .grid-container>div{
                text-align:center;
                padding:25% 25%;
                border-radius: 10px;
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


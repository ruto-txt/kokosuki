import React,{useState} from 'react';

/*
*　9ボックスパネル
    DBから内容を入れて項目に利用するかもしれないので、そのような設計を心がける
    状態によって表示を変える
*/
export function Panels(props){
    // ステートの定義：今の状態
    const [selected,setSelect]=useState([null,null]);
    //記名ルールで配列にしてもまったく困らないが、どうしようかな

    // 1：状態を管理する
    // どんな状態が必要？　今の選択状態（階層の深さ？　選択中の番号？
    // 2：現状の状態によって表示を変える
    // 3：状態を変更する
    // 4：リターンする（できなければsetContentかpropsかな？
    const SelectState = (props)=>{
        const a = "選択状態：categoryを選んでくださいｗｗ"
        return <div>{a}</div>
    }
    // オブジェクトで要素名を準備する……かな？
    const objects=[
        {'id':1,'label':"hako1"},
        {'id':2,'label':"hako2"},
        {'id':3,'label':"hako3"},
        {'id':4,'label':"hako4"},
        {'id':5,'label':"hako5"},
        {'id':6,'label':"hako6"},
        {'id':7,'label':"hako7"},
        {'id':8,'label':"hako8"},
        {'id':9,'label':"hako9"},
    ]
    
    return (
        <>
        <SelectState/>
        <div className="grid-container">
            {objects.map((obj,index)=>
                <div id={obj.id} onClick={()=>setSelect(index+1)}>
                    <span>{obj.label}</span>
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
                background:#fca;
                text-align:center;
                padding:25% 25%;
                border-radius: 10px;
            }
        `}
        </style>
        </>
    )
}

export default Panels


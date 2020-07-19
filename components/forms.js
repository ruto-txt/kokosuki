import React,{useState} from 'react'

function Forms(){
    const [isOpen, setIsOpen] = useState(()=>false);
    if(isOpen){
        return (<>
            <form className="grid-container">
                <label name="title">title:</label><input type="text" name="title" placeholder="タイトル"></input>
                <label name="url">url:</label><input type="url" name="url" placeholder="URL"></input>
            <button type="button" className="button" onClick={()=>setIsOpen(!isOpen)}>キャンセル</button>
            </form>
            <style jsx>{`
                .grid-container{
                    display:grid;
                    padding:10px 0px;
                    gap:10px 0px;
                    grid-template-columns:50px 100px 1fr;
                    align-items:center;
                    border:1px solid skyblue;
                }
                .grid-container>*{
                    margin:0px 20px;
                }
                .grid-container>input{
                    grid-column:2/span 2;
                }
                .button{
                    grid-column:1/span 2;
                    border:1px solid skyblue;
                    padding:2px 0px;
                    text-align:center;
                    background: none;
                    outline: none;
                    -webkit-appearance: none;
                    cursor:pointer;
                }
                .button:hover{
                    background:lightblue;
                }
            `}
            </style>
            </>)
    }else{
        return <>
        <div className="button" onClick={()=>setIsOpen(!isOpen)}>　Ξ 詳細入力</div>
        <style jsx>{`
            .button{
                padding:5px;
                border:1px solid skyblue;
                cursor:pointer;
                transition:0.2s;
            }
            .button:hover{
                background:lightblue;
            }
        `}</style>
        </>
    }
}

export default Forms
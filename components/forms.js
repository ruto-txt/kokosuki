import React,{useState} from 'react'

function Forms(){
    const [isOpen, setIsOpen] = useState(()=>false);
    if(isOpen){
        return (<>
            <form className="grid-container button">
                <label name="title">title:</label><input type="text" name="title" placeholder="タイトル"></input>
                <label name="url">url:</label><input type="url" name="url" placeholder="URL"></input>
                <label name="tag">tag:</label><input type="text" name="tag" placeholder="作品のタグがあれば"></input>
            </form>
            <div className="button" onClick={()=>setIsOpen(!isOpen)}>閉じる</div>
            <style jsx>{`
                .grid-container{
                    display:grid;
                    margin:5px;
                    grid-template-columns:50px 1fr;
                    align-items:center;
                }
                .grid-container>*{
                    margin:0px 20px;
                }
                .button{
                    border:1px solid skyblue;
                }
            `}
            </style>
            </>)
    }else{
        return <>
        <div className="button" onClick={()=>setIsOpen(!isOpen)}>Ξ 詳細入力</div>
        <style jsx>{`
            .button{
                margin:0px 20px;
                border:1px solid skyblue;
            }
        `}</style>
        </>
    }
}

export default Forms
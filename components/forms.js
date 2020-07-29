import React,{useState, useCallback} from 'react'

const Forms=(props)=>{
    const [isOpen, setIsOpen] = useState(()=>{
        if(props.title||props.url){return true;}
        return false;
    });
    const [title,setTitle]=useState(props.title)
    const [url,setUrl]=useState(props.url)

    return (<>
        <form className={isOpen?"grid-container":"grid-container is-hidden"}>
            <label htmlfor="title">title:</label>
                <input type="text" id="title" placeholder="タイトル" value={title}
                    onChange={e=>setTitle(e.target.value)}/>
            
            <label htmlfor="url">url:</label>
                <input type="url" id="url" placeholder="URL" value={url}
                    onChange={e=>setUrl(e.target.value)}/>
            
        </form>
        <button type="button" className="button" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"閉じる":"Ξ　情報入力"}</button>
        <style jsx>{`
            .grid-container{
                display:grid;
                padding:10px 0px;
                gap:10px 0px;
                grid-template-columns:50px 100px 1fr;
                align-items:center;
                border:1px solid skyblue;
                transition:300ms;
            }
            .grid-container>*{
                margin:0px 20px;
                grid-column:0;
            }

            .grid-container.is-hidden{
                display:grid;
                gap:0;
                border:0px;
                padding:0;
                pointer-events:none;
            }
            .grid-container.is-hidden>*{
                opacity:0;
                line-height:0;
                height:0;
            }
            .is-hidden>label{
                display:none;
            }

            .grid-container>input{
                grid-column:2/span 2;
            }
            .button{
                border:1px solid skyblue;
                padding:2px 0px;
                width:100px;
                height:30px;
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
    // }else{
    //     return <>
    //     <div className="button" onClick={()=>setIsOpen(!isOpen)}>　Ξ 詳細入力</div>
    //     <style jsx>{`
    //         .button{
    //             padding:5px;
    //             border:1px solid skyblue;
    //             cursor:pointer;
    //             transition:0.2s;
    //         }
    //         .button:hover{
    //             background:lightblue;
    //         }
    //     `}</style>
    //     </>
    // }
}

export default Forms
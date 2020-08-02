import React,{useState, useMemo, useCallback} from 'react'
import Modal from 'react-modal'

const customStyle={
    content:{
        position:'relative',
        top:'10px',
        left:'0px',
        right:'0px',
        bottom:'0px',
        minHeight:'300px',
        margin:'0 auto',
        transition:'margin-top 4s ease-in-out',
    }
}

Modal.setAppElement('#__next');

const Forms=(props)=>{
    const [isOpen, setIsOpen] = useState(props.querycheck);
    const [modalIsOpen,setModalIsOpen]=useState(false);

    const ModalContent =useCallback(()=>{
        const obj = generateURLObj(props.title,props.url)

        const writeToClipboard = useCallback((target)=>{
            var textarea = document.getElementById(target);
            textarea.select();// 文字をすべて選択
            document.execCommand("copy");// コピー

            alert(`コピーしました\n${textarea.textContent}`)
        })

        return (<>
            <h1 className="modal-title">配布用URL発行</h1>
            <p className="modal-title">タイトルURL入力済みページへの<br className="mb-br"/>リンクアドレスを発行できます</p>
            <div className="modal-grid">
                <label>発行URL</label><button onClick={()=>writeToClipboard("textURL")}>コピー</button>
                <textarea id="textURL" readOnly value={obj.encUrl}></textarea>
            </div><hr/>
            <div className="modal-grid">
                <label>HTMLタグ</label><button onClick={()=>writeToClipboard("textHtml")}>コピー</button>
                <textarea id="textHtml" readOnly value={obj.htmltag}></textarea>
            </div>
            <style jsx>{`
                .modal-title{
                    text-align:center;
                }
                .modal-grid{
                    display:grid;
                    grid-template-columns:100px 1fr 80px;
                    grid-template-rows:2rem 1fr;
                    align-items:center;
                }
                label{
                    grid-column:1/2;
                }
                button{
                    grid-column:3;
                }
                textarea{
                    margin:0 auto;
                    width:100%;
                    height:3rem;
                    grid-column:1/span 3;
                    resize:none;
                }
                @media (min-width: 641px){
                    .mb-br{
                        display:none;
                    }
                }
            `}</style>
        </>)
        }
    )

    const generateURLObj=useCallback((title,url)=>{
//仮のもの！！
const encUrl = `${window.location}?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        const htmltag = `<a href=${encUrl}>${title}</a>`
        return {encUrl,htmltag}
    })

    return (<>
        <div key="form" className={isOpen?"grid-container":"grid-container is-hidden"}>
        <label htmlFor="title">title:</label>
        <input type="text" id="title" key="title" placeholder="タイトル" value={props.title}
            onChange={e=>props.funcUpdateTitle(e.target.value)}/>

        <label htmlFor="url">url:</label>
        <input type="url" id="url" key="url" placeholder="URL" value={props.url}
            onChange={e=>props.funcUpdateUrl(e.target.value)}/>
        </div>
        <div className="grid-button-wrapper">
            <button type="button" className="button" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"閉じる":"Ξ　情報入力"}</button>
            {isOpen&&<button type="button" className="button wide" onClick={()=>{setModalIsOpen(!modalIsOpen)}}>配布用URL発行</button>}
        </div>

        <Modal isOpen ={modalIsOpen}
            closeTimeoutMS={200}
            onRequestClose={()=>{setModalIsOpen(!modalIsOpen)}}
            style={customStyle}
            contentLabel="generateURL modal">
            <ModalContent/>
        </Modal>

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
            .grid-container>:global(*) {
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
            .grid-container.is-hidden>:global(*){
                opacity:0;
                line-height:0;
                height:0;
            }
            .is-hidden>:global(label){
                display:none;
            }
            .grid-container>:global(input){
                grid-column:2/span 2;
            }

            .grid-button-wrapper{
                display:grid;
                gap:10px 0px;
                grid-template-columns:100px 1fr 200px;
                align-items:center;
                transition:300ms;
            }
            .button{
                border:1px solid skyblue;
                padding:2px 0px;
                max-width:200px;
                height:30px;
                text-align:center;
                background: none;
                outline: none;
                -webkit-appearance: none;
                cursor:pointer;
            }
            .wide{
                width:200px;
                grid-column:3;
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
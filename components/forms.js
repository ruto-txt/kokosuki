import React,{useState, useMemo, useCallback} from 'react'
import {useRouter} from 'next/router'
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
    const [isOpen, setIsOpen] = useState(()=>{
        if(props.title||props.url){return true;}
        return false;
    });
    const [title,setTitle]=useState(props.title)
    const [url,setUrl]=useState(props.url)
    const router = useRouter();
    const [modalIsOpen,setModalIsOpen]=useState(false);

    const ModalContent =useCallback(()=>{
        const [areatext,setAreaText]=useState(title + url + "で草");

        return (<>
        <h1 className="modal-title">配布用URL発行</h1>
        <p className="modal-title">URLなどが入力されたページへの<br className="mb-br"/>リンクアドレスを発行できます</p>
        <div className="modal-grid">
            <label>発行URL</label><button>コピー</button>
            <textarea id="textURL" readOnly value={areatext}></textarea>
        </div><hr/>
        <div className="modal-grid">
            <label>HTMLタグ</label><button>コピー</button>
            <textarea id="textHtml" readOnly value={areatext}></textarea>
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
            }
            @media (min-width: 641px){
                .mb-br{
                    display:none;
                }
            }
        `}</style>
        </>)})

    return (<>
        <div key="form" className={isOpen?"grid-container":"grid-container is-hidden"}>
        <label htmlFor="title">title:</label>
        <input type="text" id="title" key="title" placeholder="タイトル" value={title}
            onChange={e=>setTitle(e.target.value)}/>

        <label htmlFor="url">url:</label>
        <input type="url" id="url" key="url" placeholder="URL" value={url}
            onChange={e=>setUrl(e.target.value)}/>
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
            <ModalContent title={title} url={url}/>
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
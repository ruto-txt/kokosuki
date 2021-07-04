import { useMemo } from "react";

const Shares=(src_url,src_title,phrase)=>{
    const _URL = useMemo(()=>encodeURIComponent(src_url));
    // const tmp = history.map(arg=>inquiryText(arg)).join("\n");
    const tmp = phrase
    const pretext =`${tmp}\n\n${src_title}\n`;
    const text = encodeURIComponent(pretext);

    return (<>
        <textarea id="pretext" readOnly value={pretext} onClick={()=>writeToClipboard("pretext")}/><small>{pretext.length}文字</small>
        <div className="grid-wrapper">
            <a id="tweetbutton" href={`https://twitter.com/share?text=${text}&hashtags=${"ここすきチェッカー"}`} target="_blank"
                className="btn-social-square tw">
                    <img src="Twitter_Social_Icon_Rounded_Square_Color.svg" height="20em" width="auto"/>
            </a>
            <a href={`https://www.facebook.com/share.php?u=${_URL}`} target="_blank"
                className="btn-social-square fb">
                    <span>ふぇいすぶ</span>
            </a>
            <a href={`https://line.me/R/msg/text/?${text}${_URL}`} target="_blank"
                className="btn-social-square ln">
                    <span>らいん</span>
            </a>
            {phrase?<div className="btn-social-square btn" onClick={()=>{
                var textField = document.createElement('textarea')
                textField.innerText=`${tmp}`
                document.body.appendChild(textField)
                textField.select()
                document.execCommand('copy')
                // textField.remove()
                alert(`コピーしました\n\n\"${tmp}\"`)
            }}>フレーズ</div>:<div>{/** 空要素 */}</div>}
        </div>
        <style jsx>{`
            #pretext{
                margin-left:10px;
                width:80%;
                height:8em;
                resize:none;
            }
            .grid-wrapper{
                display:grid;
                max-width:100%;
                gap:2px;
                grid-template-columns:repeat(6,1fr);
                justify-items: center;
            }
            .btn-social-square {
                display: inline-block;
                text-decoration: none;
                margin:3px 0;
                width:100%;
                height: 1em;
                color:white;
                border-radius: 10px;
                text-align: center;
                overflow: hidden;
                transition: .3s;
            }
            .btn{
                text-align:center;
                font-weight:bold;
                background:gray;
                cursor:pointer;
                grid-column:5/span 2;
                height: 1.5em;
            }
            .btn-social-square:hover {
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
            .tw {
                background: #22b8ff;
                grid-column:1/span 2;
                height: 2em;
                line-height: auto;
            }
            .fb {
                background: #6680d8;
                font-size: 1.5em;
                line-height: 1em;
            }
            .ln{
                background: #1dcd00;
                font-size: 1.5em;
                line-height: 1em;
            }
            `}</style>
    </>)}

export default Shares;
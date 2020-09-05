import MediaQuery from "react-responsive"

const footlist = [
    {'title':"twitter@ruto",'url':"https://twitter.com/ruto_txt"},
    {'title':"なろう@ruto",'url':"https://mypage.syosetu.com/6527/"},
    {'title':"ノベプラ@ruto",'url':"https://novelup.plus/user/311402567/story"},
    {'title':"カクヨム@ruto",'url':"https://kakuyomu.jp/users/ruto_txt"}
]
const pickups=[
    {title:"神に呪われた異世界転生　――魔術師は剣で無双する",url:"https://novelup.plus/story/759889834"},
    {title:"ぎゃくさつ！　～JKのどきどき紛争傭兵ライフ～",url:"https://syosetu.com/usernovelmanage/top/ncode/1239969/"},
    {title:"ベス",url:"https://ncode.syosetu.com/n3513dy/"}
]

const Myfooter=()=>{
    return (<>
    <footer>
        <div className="wrapper">
            <ul className="gr2">
                {footlist.map(arg=><li key={arg.title}><a href={arg.url}>{arg.title}</a></li>)}
            </ul>
            <ul>2020 @ruto</ul>
            <ul className="gr2">
                <li className="center">Pick Up!</li>
                <MediaQuery query="(min-width:768px)">
                    {pickups.map(arg=><li key={arg.title}><a href={arg.url}>{arg.title}</a></li>)}
                </MediaQuery>
                <MediaQuery query="(max-width:767px)">
                    <li key={pickups[0].title}><a href={pickups[0].url}>{pickups[0].title}</a></li>
                </MediaQuery>
            </ul>
        </div>
    </footer>
    <style jsx>{`
        *{
            font-size:0.97em;
        }
        .wrapper{
            display:grid;
            grid-template-columns:repeat(5,1fr);
            max-width:992px;
            margin:0 auto;
            align-content:space-between;
        }
        .gr2{
            grid-column:span 2;
            justify-self:center;
        }
        a{
            text-decoration: none;
        }
        footer{
        }
        ul{
            list-style:none;
            padding:0;
        }
        .center{
            text-align:center;
        }
        `}</style></>)
}

export default Myfooter

// 権利表示
// 　サイトマップ（なにもなし
// 　プロフィールへのリンク（Twitter
// 　リンク（なろう
// 　リンク（ノベルアップ
// 　pick up


// サイトのシェア

//ur flex
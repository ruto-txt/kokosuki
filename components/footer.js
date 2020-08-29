import Link from 'next/link'

const footlist = [
    {'title':"@ruto",'url':"https://twitter.com/ruto_txt"},
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
    return (<><footer>
        <ul>
            <li>2020 @ruto</li>
            {footlist.map(arg=><li><Link rel={arg.url}><a>{arg.title}</a></Link></li>)}
        </ul>
    </footer>
    <style jsx>{`
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
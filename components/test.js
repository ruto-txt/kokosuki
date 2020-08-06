import Link from 'next/link'
import { useRouter } from 'next/router'  

const Test = () =>{
    const router = useRouter()
    const tmp = router.query


    //まずはGIFによる画像チュートリアル

    //あとは「真っ先に思い出せるやつがお前の感想だ」って言う
    //「これは違うな」「これが近いな」という自己対話によってあなた自身の感想を掘り起こすお手伝いをするツールです

    //サイトを作った理由。読者にとって感想は負担が大きい。ならそのお手伝いをすれば作者にとって嬉しい感想という概念存在が増えるだろう。一助になればよい。

    if(tmp.topmodal=="tutorial"){
        return <Link href={`?topmodal=tugi`} as={`/`}><div>Hello world tutorial</div></Link>
    }
    if(tmp.topmodal=="tugi"){
        return <Link href={`?topmodal=tutorial`} as={`/`}><div>Hello world tugi</div></Link>
    }
    return <Link href={`?topmodal=tugi`} as={`/`}><div>Hello world</div></Link>
}

export default Test
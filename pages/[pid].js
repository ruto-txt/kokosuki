import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p onClick={()=>router.push({pathname:'/damii',query:{name:'wakame'}})
}>Post: {pid}</p>
}

export default Post
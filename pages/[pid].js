import { useRouter } from 'next/router'
import Test from '../components/test'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <Test></Test>
}

export default Post
import Link from 'next/link'
const About = ({query}) => (    
    <div>Hello,{query.name}</div>
)

// About.getInitialProps = ({query}) => {
//   return {query}
// }

export async function getServerSideProps({query}){
    return{
        props:{query}
    }
}

export default About;
import Modal from 'react-modal';
import {useRouter} from 'next/router';
import { useState } from 'react';

const customStyles={
    // content:{
    //     top:'50%',
    //     left:'50%',
    //     margin:'0 auto',
    //     transform:'translate(-50%,-50%)',
    //     transition:'margin-top 4s ease-in-out'
    // }
};

Modal.setAppElement('#__next');

const About = ({query}) => {
    const router = useRouter();
    const [modalIsOpen,setIsOpen]=useState(false);

    return (    
    <>
    <div>Hello,{query.name}
    <Modal isOpen={modalIsOpen}
    closeTimeoutMS={200}
    onRequestClose={()=>{setIsOpen(!modalIsOpen);router.push('/damii')}}
    // style={customStyles}
    constentLabel="Post modal"
    >
        <div>yeah! <button onClick={()=>setIsOpen(!modalIsOpen)}>bye!</button></div>
    </Modal>
    </div>
    
    <button onClick={()=>{setIsOpen(!modalIsOpen)}}>Modal open!</button>
    </>
)}

// About.getInitialProps = ({query}) => {
//   return {query}
// }

export async function getServerSideProps({query}){
    return{
        props:{query}
    }
}

export default About;
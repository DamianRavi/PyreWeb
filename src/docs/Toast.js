import { useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast(props) {

  useEffect(() => {
    if(props.alert){
      toast[props.alert[0]](props.alert[1], {
      position: "bottom-left",
      className: "success",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored", //light
      progress: undefined,
      transition: Bounce})
    }
  }, [props])

  return (
    <ToastContainer />
  );
}

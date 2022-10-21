import { useNavigate } from 'react-router-dom';



function Redirect() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/singleapplicantview')

    }
}

export default Redirect
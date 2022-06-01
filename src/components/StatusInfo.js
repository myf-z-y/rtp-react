import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function StatusInfo(props) {
    if (props.stat === 'loading') {
        return (<CircularProgress className='statIcon'></CircularProgress>);
    }
    else if (props.stat === 'done') {
        return (<CheckCircleIcon className='statIcon'></CheckCircleIcon>)
    }
    else {
        return
    }

}

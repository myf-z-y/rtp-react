import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(props) {
    return (<footer className="end">
        <p>Email: iammyf@njtech.edu.cn</p>
        <div className="git-box">
        <GitHubIcon></GitHubIcon>  
            <p>written by zjmyf, 2022.</p>
        </div>
    </footer>);
}

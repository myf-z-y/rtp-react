import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";

export default function StatusInfo(props) {
  if (props.stat === "loading") {
    return (
      <CircularProgress
        className="statIcon"
        color="inherit"
        size="25px"
      ></CircularProgress>
    );
  } else if (props.stat === "done") {
    return (
      <Box sx={{ display: "flex" }}>
        <CheckCircleIcon className="statIcon" size="25px"></CheckCircleIcon>
      </Box>
    );
  } else {
    return;
  }
}

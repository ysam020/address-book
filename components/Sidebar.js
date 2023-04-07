// import "../styles/sidebar.css";
import { IconButton } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      width: "100px !important",
      height: "100px !important",
    },
  })
);

function Sidebar() {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <div className="sidebar-list">
        <IconButton sx={{ color: "#ffffff9f", width: "80px", height: "80px" }}>
          <ContactPhoneIcon
            sx={{ color: "#ffffff9f", width: "80px", height: "80px" }}
          />
        </IconButton>
        <p className="sidebar-list-text">Address Book</p>
      </div>
    </div>
  );
}

export default Sidebar;

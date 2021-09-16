import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

import "./adminCard.css";
const useStyles = makeStyles({
  root: {
    minWidth: 290,
    maxWidth: 290,
  },
});

const AdminCards = (props) => {
  const { heading, headingColor, first, second, third } = props;
  const classes = useStyles();
  return (
    <>
      {/* <Button> */}
      <Card className={`${classes.root} home-cards `}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ color: headingColor }}
          >
            {heading}
          </Typography>

          <Typography variant="body2" component="p">
            <strong>Amount : </strong>
            {first}
            <br />
            {second && (
              <>
                <strong>Today : </strong>
                {second}
                <br />
              </>
            )}
            {third && (
              <>
                <strong>Total : </strong>
                {third}
              </>
            )}
          </Typography>
        </CardContent>
      </Card>
      {/* </Button> */}
    </>
  );
};

export default AdminCards;

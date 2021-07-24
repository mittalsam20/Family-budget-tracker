import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import "./cards.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 290,
  },
});

const HomeCards = (props) => {
  const { heading, headingColor } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={`${classes.root} home-cards `}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: headingColor }}
            >
              {heading}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default HomeCards;

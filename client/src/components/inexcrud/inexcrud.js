import { makeStyles } from "@material-ui/core";
import {
  Button,
  Grid,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
// import { ExpenseTracker } from "../context/context";
import { v4 as uuidv4 } from "uuid";
import {
  incomeCategories,
  expenseCategories,
} from "../../constants/categories";
// import formatDate from "../utils/formatdate";
import { useSpeechContext } from "@speechly/react-client";
// import Alert from "./alert";
import "./inexcrud.css";
const useStyles = makeStyles(() => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    marginTop: "20px",
  },
}));

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  // date: formatDate(new Date()),
};

const Inexcrud = () => {
  const classes = useStyles();
  // const [formData, setFormData] = useState(initialState);
  // const { addTransaction } = useContext(ExpenseTracker);
  // const { segment } = useSpeechContext();
  // const [open, setOpen] = useState(false);

  // const createTransaction = () => {
  //   if (Number.isNaN(Number(formData.amount))) return;
  //   const transaction = {
  //     ...formData,
  //     amount: Number(formData.amount),
  //     id: uuidv4(),
  //   };
  //   setOpen(true);
  //   addTransaction(transaction);
  //   console.log(transaction);
  //   setFormData(initialState);
  // };

  // useEffect(() => {
  //   if (segment) {
  //     if (segment.intent === "add_expense") {
  //       setFormData({ ...formData, type: "Expense" });
  //     } else if (segment.intent === "add_income") {
  //       setFormData({ ...formData, type: "Income" });
  //     } else if (
  //       segment.isFinal &&
  //       segment.intent.intent === "create_transaction"
  //     ) {
  //       return createTransaction();
  //     } else if (
  //       segment.isFinal &&
  //       segment.intent.intent === "cancel_transaction"
  //     ) {
  //       return setFormData(initialState);
  //     }
  //     segment.entities.forEach((e) => {
  //       const category = `${e.value.charAt(0)}${e.value
  //         .slice(1)
  //         .toLowerCase()}`;
  //       // console.log(e.value);
  //       switch (e.type) {
  //         case "amount":
  //           setFormData({ ...formData, amount: e.value });
  //           break;
  //         case "category":
  //           if (incomeCategories.map((ic) => ic.type).includes(category)) {
  //             setFormData({ ...formData, type: "Income", category: category });
  //           } else if (
  //             incomeCategories.map((ic) => ic.type).includes(category)
  //           ) {
  //             setFormData({ ...formData, type: "Expense", category: category });
  //           }
  //           break;
  //         case "date":
  //           setFormData({ ...formData, date: e.value });
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  //     if (
  //       segment.isFinal &&
  //       formData.amount &&
  //       formData.category &&
  //       formData.type &&
  //       formData.date
  //     ) {
  //       createTransaction();
  //     }
  //   }
  // }, [segment]);

  // const selectedCat =
  //   formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <>
      <div className="formContTop">
        <div className="formCont">
          <FormControl
            style={{
              paddingBottom: "15px",
              width: "200px",
              paddingRight: "40px",
            }}
          >
            <InputLabel>Type</InputLabel>
            <Select
              // value={formData.type}
              onChange={(e) => {
                // setFormData({ ...formData, type: e.target.value });
              }}
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
              <MenuItem value="Saving">Saving</MenuItem>
              <MenuItem value="Investment">Investment</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{
              paddingBottom: "15px",
              width: "200px",
              paddingRight: "40px",
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select
              // value={formData.category}
              onChange={(e) => {
                // setFormData({ ...formData, category: e.target.value });
              }}
            >
              {/* {selectedCat.map((c) => (
                  <MenuItem Key={c.type} value={c.type}>
                    {c.type}
                  </MenuItem>
                ))} */}
            </Select>
          </FormControl>
          <FormControl
            style={{
              paddingBottom: "15px",
              width: "200px",
              paddingRight: "40px",
            }}
          >
            <TextField
              type="number"
              label="Amount"
              // value={formData.amount}
              onChange={(e) => {
                // setFormData({ ...formData, amount: e.target.value });
              }}
            />
          </FormControl>
          <FormControl
            style={{
              paddingBottom: "15px",
              width: "200px",
              paddingRight: "40px",
            }}
          >
            <TextField
              type="date"
              label="Date"
              placeholder=""
              // value={formData.date}
              onChange={(e) => {
                // setFormData({ ...formData, date: formatDate(e.target.value) });
              }}
            />
          </FormControl>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={() => {
              // createTransaction();
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </>
  );
};

export default Inexcrud;

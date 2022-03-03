const [inputFields, setInputFields] = useState([
    { usdt: "", income: "" },
    { usdt: "", income: "" },
]);

// Expr1 For Sum All USDT
const [expr1, setExpr1] = useState(0);

// Expr2 For USDT / ENTER
const [expr2, setExpr2] = useState(0);
const [expr3, setExpr3] = useState(0);
const [expr4, setExpr4] = useState(0);

// Finall For Stored All Data And Make Algorithme
const [finall, setFinall] = useState(0);

// Get Input Value and Make All Exprisions
const handelChangeInput1 = (index, event) => {
    const values = [...inputFields];

    values[index][event.target.name] = event.target.value;
    setInputFields(values);

    // Sum All USDT
    const sumVal = parseFloat(
        (values[index][event.target.usdt] = event.target.value)
    );

    setExpr3(sumVal);
    console.log(expr3);

    // Storege Data to Expr1
    setExpr1(expr1 + expr3);
};

const handelChangeInput2 = (index, event) => {
    const values = [...inputFields];

    values[index][event.target.name] = event.target.value;
    setInputFields(values);

    // Sum All USDT
    const sumVal1 = expr3;

    // Get Value From USDT And Enter And Make That Algorithm (usdt / enter)
    const sumVal2 = parseFloat(
        (values[index][event.target.income] = event.target.value)
    );

    const Equal = sumVal1 / sumVal2;

    // Storege Data to Expr2
    setExpr2(Equal);
    setExpr4(expr2 + Equal);
};

// Handel Clac Button , Get All outPut and Make a Exprision Or Algorithme
const handelCalcInputs = () => {
    setFinall(expr1 / expr4);
};


import React, { useState } from 'react';
import {
    Button,
    Container,
    IconButton,
    TextField
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import DeleteIcon from '@mui/icons-material/Delete';
import firebase from "../utils/firebase";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "auto",
        marginTop: 50,
        borderRadius: 20
    },
    main: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: 550,
        backgroundColor: "#F4C0B3",
    },
    heading: {
        backgroundColor: '#AFA7BB',
        color: "#fff",
        width: "100%",
        marginTop: 20
    },
    textField: {
        display: "inline-flex",
        marginBottom: 7,
        marginTop: 7,
        size: "large",
        width: "100% !important",
        "&:hover": {
            "& $notchedOutline": {
                border: "none",
            },
        },
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#eeeeee",
            border: "none !important",
        },
    },
    notchedOutline: {
        border: "none !important",
        "&:hover": {
            border: "none !important",
        },
    },
    focused: {
        "& $notchedOutline": {
            border: "none",
        },
    },
    list: {
        display: "flex",
        justifyContent: "flex-start",
        overflowY: "scroll",
        overflowX: "hidden",
        height: 400,
    },
    inputField: {
        display: "flex",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    addBtn: {
        backgroundColor: "#085467 !important",
        height: 39
    },
    listItemDiv: {
        display: "flex"
    },
    iconBtn: {
        width: "auto",
        paddingTop: "7px !important",
        marginLeft: 10,
        "&:hover": {
            color: "red"
        }
    },
    listElement: {
        textTransform: "capitalize",
        paddingTop: 5,
        paddingBottom: 5
    }
}))

const Todo = () => {
    const [inputList, setInputList] = useState("");
    const [listItem, setListItem] = useState([]);

    const {
        main,
        heading,
        root,
        list,
        inputField,
        textField,
        notchedOutline,
        focused,
        textFieldDiv,
        addBtn,
        listItemDiv,
        iconBtn,
        listElement
    } = useStyles();

    const handleChange = (e) => {
        setInputList(e.target.value)
    }

    const addItem = (e) => {
        e.preventDefault();
        setListItem((items) => {
            return [...items, inputList]
        })
        setInputList("");

        firebase.database().ref('list/').set({inputList});

        // const database = getDatabase();
        // set(ref(database, 'list/'), { inputList });

    }

    const delItem = (id) => {
        setListItem((items) => {
            return items.filter((el, i) => {
                return i !== id;
            })
        })
        alert("Deleted")
    }
    return (
        <Container maxWidth="sm" className={root}>
            <div className={main}>
                <div className={heading}>
                    <h2>Todo List</h2>
                </div>
                <div className={inputField}>
                    <div className={textFieldDiv}>
                        <TextField
                            variant="outlined"
                            size="small"
                            required
                            type="text"
                            value={inputList}
                            placeholder="Add Items"
                            className={textField}
                            InputProps={{
                                classes: {
                                    notchedOutline: notchedOutline,
                                    focused: focused,
                                },
                            }}
                            onChange={handleChange}
                        />
                    </div>
                    <Button variant="contained"
                        className={addBtn}
                        onClick={addItem}
                        type="submit"> + </Button>
                </div>
                <div className={list}>
                    <ol>
                        {
                            listItem.map((val, i) => {
                                return (
                                    <div className={listItemDiv}>
                                        <li key={i} id={i} className={listElement}>
                                            {val}
                                        </li>
                                        <DeleteIcon
                                            className={iconBtn}
                                            fontSize="small"
                                            onClick={delItem}
                                        />
                                    </div>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </Container>
    )
}

export default Todo;

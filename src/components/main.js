import React, {useState, useEffect} from 'react'
import Form from './Form'
import TodoInterface from './TodoInterface'
import Tracker from './Tracker'
import {Button, TextField, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    name: {
        fontSize: 50,
        fontWeight: "bold",
    }
  }));
  

const Main = ({setInputText, inputText, todos, setTodos, setFilterOption, filteredTodos, filterOption, setUpdateInputText, setToUpdate, updateInputText, toUpdate}) => {
    const styles = useStyles();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("guest")

    useEffect(() => {
        const getNameFromLocalStorage = () => {
            if(localStorage.getItem("localNameStoragev1") === null){
                localStorage.setItem("localNameStoragev1", [])
            }else {
                const nameFromLocalStorage = JSON.parse(localStorage.getItem("localNameStoragev1"))
                setName(nameFromLocalStorage)
    
            }
        }

        getNameFromLocalStorage()
    },[])

    useEffect(() => {
        const saveNameToLocalStorage = () => {
            localStorage.setItem("localNameStoragev1", JSON.stringify(name))
        }

        saveNameToLocalStorage()
    }, [name])

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleName = e => setName(e.target.value)

    return(
        <div>
            <header>
                <Button color="primary" onClick={handleClickOpen} className={styles.name}>
                    {name}
                </Button>
                {"'s "}
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Primary User</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Enter name of the primary user (You can change the name later)
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your Name..."
                        type="name"
                        fullWidth
                        onChange={handleName}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>          
                Todo App
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setFilterOption={setFilterOption}
            />
            <TodoInterface
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                filteredTodos={filteredTodos}
                setInputText={setInputText}
                setToUpdate={setToUpdate}
                setUpdateInputText={setUpdateInputText}
                updateInputText={updateInputText}
                toUpdate={toUpdate}
            />
            <Tracker 
                filteredTodos={filteredTodos} 
                setTodos={setTodos}
                filterOption={filterOption}
            />
        </div>
    )
}

export default Main

import React from 'react';
import { 
    TextField,
    Button,
    Typography,
    Alert,
    Stack,
    Box,
    Checkbox,
} from '@mui/material';

function CreateBoardFormComponent({}) {
    const [boardName, setBoardName] = React.useState('');
    const [boardSize, setBoardSize] = React.useState(5);
    const [useFreeSpace, setFreeSpace] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState('');
    function handleBoardSizeChange(value: number) {
        let newSize = value;
        if (useFreeSpace && value % 2 === 0) {
            newSize++;
            return;
        }
        setBoardSize(value);
        setErrorMessage('');
    }
    return (
        <Box>
            <Stack direction="column" spacing={2}>
                <Typography variant="h4">Create New Board</Typography>
                {errorMessage && 
                    <Alert severity="error">{errorMessage}</Alert>
                }
                <TextField
                    label="Board Name"
                    value={boardName}
                    onChange={(e) => setBoardName(e.target.value)}
                />
                <Box>
                    <TextField
                        label="Board Size"
                        type="number"
                        value={boardSize}
                        onChange={(e) => setBoardSize(Number(e.target.value))}
                    />
                    <Checkbox 
                        checked={useFreeSpace}
                        onChange={(e) => setFreeSpace(e.target.checked)}
                    />
                    <Typography variant="caption">Include free space cells (Forces an odd-numbered board)</Typography>
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Create Board
                </Button>
            </Stack>
        </Box>
    );
}

export default CreateBoardFormComponent;
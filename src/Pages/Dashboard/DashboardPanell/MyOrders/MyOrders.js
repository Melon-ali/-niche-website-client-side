import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

    const {user} = useAuth()
    const [userOrder, setUserOrder] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/emailorder?email=${user.email}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])

    return (
        <>
            <h1 style={{color: 'gray'}}>My Order Is Panding {userOrder.length}</h1>
            
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ProductName</TableCell>
                    <TableCell align="right">Price:</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Staus</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {userOrder.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}$</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </>
    );
};

export default MyOrders;
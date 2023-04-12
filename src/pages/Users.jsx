import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Grid,
  Typography,
} from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import FactoryIcon from "@mui/icons-material/Factory";
import { Delete, Edit } from "@mui/icons-material";
import { usersData, address } from "../data/mockData";

const Users = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => usersData);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue("Name")}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const formColumns = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "USER NAME",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "firstName",
        header: "FIRST NAME",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "lastName",
        header: "LAST NAME",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "primaryGroup",
        header: "PRIMARY GROUP",
        muiTableBodyCellEditTextFieldProps: {
          select: true, // add select property for dropdown
          children: address.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "email",
        header: "E-MAIL",
        muiTableBodyCellEditTextFieldProps: {
          select: true, // add select property for dropdown
          children: address.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        muiTableBodyCellEditTextFieldProps: {
          select: true, // add select property for dropdown
          children: address.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          )),
        },
      },
    ],
    [getCommonEditTextFieldProps]
  );

  const tableColumns = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "USER NAME",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "firstName",
        header: "FIRST NAME",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "lastName",
        header: "LAST NAME",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "primaryGroup",
        header: "PRIMARY GROUP",
        muiTableBodyCellEditTextFieldProps: {
          select: true, // add select property for dropdown
          children: address.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "email",
        header: "E-MAIL",
        muiTableBodyCellEditTextFieldProps: {
          select: true, // add select property for dropdown
          children: address.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        muiTableBodyCellEditTextFieldProps: {
          select: true, // add select property for dropdown
          children: address.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          )),
        },
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={tableColumns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableGrouping
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Tooltip arrow placement="right" title="Edit">
              <IconButton
                color="warning"
                onClick={() => table.setEditingRow(row)}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Box sx={{ paddingLeft: "10px" }}>
            <Grid item xs={12} sm={12} xl={12} lg={12}>
              <Typography variant="h5">Users</Typography>
            </Grid>
            <Grid item xs={12} sm={6} xl={6} lg={6}>
              <Box sx={{ display: "flex", gap: "1rem", paddingTop: "10px" }}>
                <Button
                  style={{ backgroundColor: "#99cc33" }}
                  onClick={() => setCreateModalOpen(true)}
                  variant="contained"
                >
                  CREATE
                </Button>
              </Box>
            </Grid>
          </Box>
        )}
      />
      <CreateNewPowerPlant
        columns={formColumns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewPowerPlant = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Site</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default Users;

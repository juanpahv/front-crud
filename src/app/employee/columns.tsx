import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Employee } from '../types';

export const columns = (
  deleteEmployee: (id: number) => void,
): ColumnDef<Employee>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'birthDate',
    header: 'Birth Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={`/employees/${id}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <span className="text-red-500">
              <DropdownMenuItem onClick={() => deleteEmployee(id)}>
                <Trash className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </span>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

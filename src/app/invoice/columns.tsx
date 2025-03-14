import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Invoice } from '../types';

export const columns = (
  deleteInvoice: (id: number) => void,
): ColumnDef<Invoice>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'total',
    header: 'Total',
  },
  {
    accessorKey: 'balance',
    header: 'Balance',
  },
  {
    accessorKey: 'client',
    header: 'Client',
    cell: ({ row }) => {
      const { name, lastName } = row.original.client;
      return (
        <div>
          <div>{name}</div>
          <div className="text-sm text-gray-500">{lastName}</div>
        </div>
      );
    }
  },
  {
    accessorKey: 'status',
    header: 'Status'
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
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <span className="text-red-500">
              <DropdownMenuItem onClick={() => deleteInvoice(id)}>
                <Trash className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </span>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

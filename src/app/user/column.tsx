'use client';

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/user";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "age",
    header: "Umur",
  },
  {
    accessorKey: "gender",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "status",
    header: "Status",
  }
];

"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import { deleteTodo } from "@/actions/delete";

export function DeleteDialog({
  id
}: {
  id: number;
}) {
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    if (!id) return;
    await deleteTodo({ id });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-sm text-blue-600 hover:text-blue-800 hover:bg-transparent px-2"
        >
          <Trash className="size-4 text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Todo {id}</DialogTitle>
        </DialogHeader>
        <div>
          <p>Apakah anda yakin ingin menghapus todo ini?</p>
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button onClick={handleDelete}>
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

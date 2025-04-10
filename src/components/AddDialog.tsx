"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { addTodo } from "@/actions/add";
import { Status } from "@/types/models";

export function AddDialog({ status }: { status: Status }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  async function handleSubmit() {
    await addTodo({ text, status });

    setText("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-xl text-green-600 hover:text-green-800 cursor-pointer hover:bg-transparent">＋</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Todo untuk <span className="capitalize">{status}</span></DialogTitle>
        </DialogHeader>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Masukkan deskripsi todo"
        />
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>Batal</Button>
          <Button onClick={handleSubmit} disabled={!text}>Kirim</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

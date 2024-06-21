import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

type FormInputListProps = {
  items: string[];
  onChange: (items: string[]) => void;
};

export default function FormInputList({ items, onChange }: FormInputListProps) {
  const [newItem, setNewItem] = useState("");

  return (
    <div className="space-y-2 rounded-md border p-4 shadow">
      <div className="flex flex-row space-x-2">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
              e.preventDefault();
              onChange([...items, newItem]);
              setNewItem("");
            }
          }}
        />
        <Button
          onClick={() => {
            onChange([...items, newItem]);
            setNewItem("");
          }}
          type="button"
        >
          Add
        </Button>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex flex-row justify-between">
            {item}
            <Button
              onClick={() => {
                onChange(items.filter((i) => i !== item));
              }}
              variant="ghost"
            >
              <Trash className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

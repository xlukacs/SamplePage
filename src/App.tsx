import { useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HoverAnimation } from "@/components/HoverAnimation";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-svh px-4 py-12 ${darkMode ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-950"}`}
    >
      <main className="mx-auto flex w-full max-w-lg flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight">Sample Test Page</h1>
          <p className="text-muted-foreground">
            A few interactive elements for quick manual testing.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Counter</CardTitle>
            <CardDescription>Increment, decrement, or reset.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-4xl font-semibold tabular-nums">{count}</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCount((value) => value - 1)}
                aria-label="Decrease count"
              >
                <Minus data-icon="inline-start" />
              </Button>
              <Button onClick={() => setCount((value) => value + 1)}>
                <Plus data-icon="inline-start" />
                Increment
              </Button>
              <Button
                variant="secondary"
                onClick={() => setCount(0)}
              >
                <RotateCcw data-icon="inline-start" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Greeting</CardTitle>
            <CardDescription>Type a name and see it echoed below.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              {name.trim()
                ? `Hello, ${name.trim()}!`
                : "Hello, stranger!"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Toggle</CardTitle>
            <CardDescription>Flip dark mode on the page background.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant={darkMode ? "default" : "outline"}
              onClick={() => setDarkMode((value) => !value)}
            >
              {darkMode ? "Dark mode on" : "Dark mode off"}
            </Button>
          </CardContent>
        </Card>

        <HoverAnimation />
      </main>
    </div>
  );
}

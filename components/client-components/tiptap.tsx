"use client";

import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import {
  Bold,
  Code,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Quote,
  Ruler,
  Strikethrough,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Tiptap({ className }: { className?: string }) {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "focus:outline-none px-2",
      },
    },
    immediatelyRender: false,
    injectCSS: false,

    content: "<p>Hello World! 🌎️</p>",
  });

  if (!editor) return null;

  return (
    <div className={cn(className, "w-full rounded-lg border p-2")}>
      <div className="flex gap-4">
        {/* Nodes group */}
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="heading 1"
            aria-label="Toggle heading 1"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <Heading1 className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="heading 2"
            aria-label="Toggle heading 2"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <Heading2 className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="heading 3"
            aria-label="Toggle heading 3"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <Heading3 className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="codeblock"
            aria-label="Toggle code block"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            <Code2 className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="horizontal rule"
            aria-label="Toggle horizontal rule"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <Ruler className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Marks group */}
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="blockquote"
            aria-label="Toggle blockquote"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            <Quote className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="code"
            aria-label="Toggle code"
            onClick={() => editor.chain().focus().toggleCode().run()}
          >
            <Code className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Single Nodes group */}
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem
            value="bulletList"
            aria-label="Toggle bullet list"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <List className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="orderedList"
            aria-label="Toggle ordered list"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <ListOrdered className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <EditorContent
        editor={editor}
        className="prose max-w-fit break-words bg-gray-100"
      />
    </div>
  );
}

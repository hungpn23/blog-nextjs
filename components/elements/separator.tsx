export function Separator({
  direction = "vertical",
}: {
  direction?: "horizontal" | "vertical";
}) {
  return direction === "vertical" ? (
    <span className="h-4 w-px bg-border" />
  ) : (
    <span className="h-px w-4 bg-border" />
  );
}

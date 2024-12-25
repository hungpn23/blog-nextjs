import { ContentContainer } from "./content-container";

export function Footer() {
  return (
    <footer className="border-t py-3">
      <ContentContainer>
        <p className="text-center text-base text-muted-foreground">
          © 2024 phamngochung
        </p>
      </ContentContainer>
    </footer>
  );
}

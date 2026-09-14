import { createRoot } from "react-dom/client";
import { useState } from "react";
import {
  ActivityIcon,
  Alert,
  ArrowLeftIcon,
  Badge,
  BoxAltIcon,
  Button,
  Card,
  Container,
  Home01Icon,
  Icon,
  Input,
  SearchLgIcon,
  Skeleton,
  Stack,
  Textarea,
  Text,
  ThemeProvider,
} from "../src";
import "../src/styles/index.css";
import { TextExamples } from "../src/components/typography/Text.examples";
import { ButtonExamples } from "../src/components/button/Button.examples";
import { IconButtonExamples } from "../src/components/button/IconButton.examples";
import { LinkButtonExamples } from "../src/components/button/LinkButton.examples";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeProvider defaultTheme={dark ? "dark" : "light"}>
      <main>
        <Container className={
        dark
          ? "dark min-h-screen bg-neutral-900 py-10 text-foreground"
          : "min-h-screen bg-white py-10 text-foreground"
      }>
          <Stack>
            <Button
              className="self-start"
              variant="primary"
              onClick={() => setDark(!dark)}
            >
              Toggle theme
            </Button>
            <Card className={dark ? "bg-background text-foreground" : "bg-white text-foreground"}>
              <Card.Header>
                <Text size="xl" uppercase>Altics UI</Text>
                <Badge>Preview</Badge>
              </Card.Header>
              <Card.Content>
                <Stack>
                  <Alert><Text>Accessible, token-based components.</Text></Alert>
                  <Input className=" focus:border-1 focus:border-brand-500" placeholder="Email address" />
                  <Textarea placeholder="Message" />
                  <Skeleton className="h-8 w-48" />
                  <TextExamples />
                  <ButtonExamples />
                  <IconButtonExamples />
                  <LinkButtonExamples />
                  <Card className="shadow-xs"><Card.Content className="p-8"><Text>Shadow XS Card</Text></Card.Content></Card>
                  <Card className="shadow-sm"><Card.Content className="p-8"><Text>Shadow SM Card</Text></Card.Content></Card>
                  <Card className="shadow-md"><Card.Content className="p-8"><Text>Shadow MD Card</Text></Card.Content></Card>
                  <Card className="shadow-lg"><Card.Content className="p-8"><Text>Shadow LG Card</Text></Card.Content></Card>
                  <Card className="shadow-xl"><Card.Content className="p-8"><Text>Shadow XL Card</Text></Card.Content></Card>
                  <div className="flex items-center gap-4">
                    <ActivityIcon size={24} />
                    <ArrowLeftIcon size={24} />
                    <Home01Icon size={32} />
                    <SearchLgIcon size={32} className="text-primary" />
                    <BoxAltIcon size={48} />
                    <Icon size={24}>
                      <ActivityIcon />
                    </Icon>
                  </div>
                </Stack>
              </Card.Content>
            </Card>
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}
createRoot(document.getElementById("root")!).render(<App />);

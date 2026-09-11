import { createRoot } from "react-dom/client";
import { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Input,
  Skeleton,
  Stack,
  Textarea,
  Text,
} from "../src";
import { TextExamples } from "../src/components/typography/Text.examples";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <main
      className={
        dark
          ? "dark min-h-screen bg-background py-10 text-foreground"
          : "min-h-screen bg-white py-10 text-foreground"
      }
    >
      <Container>
        <Stack>
          <Button
            className="self-start"
            variant="outline"
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
                <div className="flex gap-2">
                  <Button>Save</Button>
                  <Button variant="secondary">
                    Saving
                  </Button>
                  <Button disabled variant="outline">
                    Disabled
                  </Button>
                </div>
                <Skeleton className="h-8 w-48" />
                <TextExamples />
                <Card className="shadow-xs"><Card.Content className="p-8"><Text>Shadow XS Card</Text></Card.Content></Card>
                <Card className="shadow-sm"><Card.Content className="p-8"><Text>Shadow SM Card</Text></Card.Content></Card>
                <Card className="shadow-md"><Card.Content className="p-8"><Text>Shadow MD Card</Text></Card.Content></Card>
                <Card className="shadow-lg"><Card.Content className="p-8"><Text>Shadow LG Card</Text></Card.Content></Card>
                <Card className="shadow-xl"><Card.Content className="p-8"><Text>Shadow XL Card</Text></Card.Content></Card>
              </Stack>
            </Card.Content>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<App />);

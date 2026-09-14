import { Text } from "../typography/Text";
import { LinkButton } from "./LinkButton";

// Simple placeholder icons
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" />
  </svg>
);

const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 3C4.5 3 1.73 5.11 1 8c.73 2.89 3.5 5 7 5s6.27-2.11 7-5c-.73-2.89-3.5-5-7-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
  </svg>
);

const IconExternal = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12 3H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4v1H4c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h8c1.66 0 3 1.34 3 3v4h-1V5c0-1.1-.9-2-2-2z" />
  </svg>
);

export function LinkButtonExamples() {
  return (
    <div className="space-y-10 p-6">
      {/* Color Variants */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Color Variants
        </Text>
        <div className="space-y-4">
          <div>
            <Text weight="semibold" className="mb-2">Gray (default)</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton text="Help" />
              <LinkButton text="Documentation" />
              <LinkButton text="Support" />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Color (Brand Secondary)</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton color="color" text="Learn More" />
              <LinkButton color="color" text="Explore" />
              <LinkButton color="color" text="Discover" />
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Sizes
        </Text>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <LinkButton size="xs" text="Extra Small" />
            <LinkButton size="sm" text="Small" />
            <LinkButton size="md" text="Medium" />
            <LinkButton size="lg" text="Large" />
            <LinkButton size="xl" text="Extra Large" />
          </div>
        </div>
      </div>

      {/* All Size/Color Combinations */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Size & Color Combinations
        </Text>
        <div className="space-y-6">
          {/* Gray */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Gray
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton color="gray" size="xs" text="XS" />
              <LinkButton color="gray" size="sm" text="SM" />
              <LinkButton color="gray" size="md" text="MD" />
              <LinkButton color="gray" size="lg" text="LG" />
              <LinkButton color="gray" size="xl" text="XL" />
            </div>
          </div>

          {/* Color */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Color
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton color="color" size="xs" text="XS" />
              <LinkButton color="color" size="sm" text="SM" />
              <LinkButton color="color" size="md" text="MD" />
              <LinkButton color="color" size="lg" text="LG" />
              <LinkButton color="color" size="xl" text="XL" />
            </div>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          With Icons
        </Text>
        <div className="space-y-4">
          <div>
            <Text weight="semibold" className="mb-2">Trailing Icon</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton text="Next" trailingIcon={<IconArrow />} />
              <LinkButton color="color" text="Learn More" trailingIcon={<IconArrow />} />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Leading Icon</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton text="View" leadingIcon={<IconEye />} />
              <LinkButton color="color" text="Explore" leadingIcon={<IconExternal />} />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Both Icons</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton text="Details" leadingIcon={<IconEye />} trailingIcon={<IconArrow />} />
              <LinkButton color="color" text="Discover" leadingIcon={<IconExternal />} trailingIcon={<IconArrow />} />
            </div>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          States
        </Text>
        <div className="space-y-4">
          <div>
            <Text weight="semibold" className="mb-2">Disabled</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton disabled text="Disabled Gray" />
              <LinkButton color="color" disabled text="Disabled Color" />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Loading</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton loading text="Loading..." />
              <LinkButton color="color" loading text="Processing..." />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Loading with Icons (Icons Hidden)</Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton loading text="Loading" trailingIcon={<IconArrow />} />
              <LinkButton color="color" loading text="Processing" leadingIcon={<IconEye />} />
            </div>
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Common Use Cases
        </Text>
        <div className="space-y-4">
          <div>
            <Text weight="semibold" className="mb-2">Navigation & Help</Text>
            <div className="flex flex-wrap gap-4">
              <LinkButton text="Help" />
              <LinkButton text="Documentation" />
              <LinkButton text="Support" />
              <LinkButton text="Feedback" />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Call-to-Action Links</Text>
            <div className="flex flex-wrap gap-4">
              <LinkButton color="color" text="Learn More" trailingIcon={<IconArrow />} />
              <LinkButton color="color" text="Get Started" trailingIcon={<IconArrow />} />
              <LinkButton color="color" text="Explore Features" trailingIcon={<IconArrow />} />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Inline Links</Text>
            <div className="flex flex-wrap gap-2">
              <Text>Read our</Text>
              <LinkButton size="md" color="color" text="privacy policy" />
              <Text>or</Text>
              <LinkButton size="md" color="color" text="terms of service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

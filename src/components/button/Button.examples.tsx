import { Text } from "../typography/Text";
import { Button } from "./Button";

// Simple placeholder icons
const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 1 1-1.06-1.06l7.25-7.25a.75.75 0 0 1 1.06 0z" />
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z" />
  </svg>
);

export function ButtonExamples() {
  return (
    <div className="space-y-10 p-6">
      {/* Variants */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Variants
        </Text>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" text="Primary" />
            <Button variant="secondary" text="Secondary" />
            <Button variant="tertiary" text="Tertiary" />
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
            <Button size="xs" text="Extra Small" />
            <Button size="sm" text="Small" />
            <Button size="md" text="Medium" />
            <Button size="lg" text="Large" />
            <Button size="xl" text="Extra Large" />
          </div>
        </div>
      </div>

      {/* All Sizes with Different Variants */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Sizes with Variants
        </Text>
        
        {/* Primary */}
        <div className="mb-6">
          <Text weight="semibold" className="mb-2">Primary</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="primary" size="xs" text="XS" />
            <Button variant="primary" size="sm" text="SM" />
            <Button variant="primary" size="md" text="MD" />
            <Button variant="primary" size="lg" text="LG" />
            <Button variant="primary" size="xl" text="XL" />
          </div>
        </div>

        {/* Secondary */}
        <div className="mb-6">
          <Text weight="semibold" className="mb-2">Secondary</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" size="xs" text="XS" />
            <Button variant="secondary" size="sm" text="SM" />
            <Button variant="secondary" size="md" text="MD" />
            <Button variant="secondary" size="lg" text="LG" />
            <Button variant="secondary" size="xl" text="XL" />
          </div>
        </div>

        {/* Tertiary */}
        <div className="mb-6">
          <Text weight="semibold" className="mb-2">Tertiary</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="tertiary" size="xs" text="XS" />
            <Button variant="tertiary" size="sm" text="SM" />
            <Button variant="tertiary" size="md" text="MD" />
            <Button variant="tertiary" size="lg" text="LG" />
            <Button variant="tertiary" size="xl" text="XL" />
          </div>
        </div>
      </div>

      {/* Icons */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          With Icons
        </Text>
        <div className="space-y-4">
          <div>
            <Text weight="semibold" className="mb-2">Leading Icon</Text>
            <div className="flex flex-wrap gap-3">
              <Button leadingIcon={<IconPlus />}>Add New</Button>
              <Button variant="secondary" leadingIcon={<IconCheck />}>
                Confirm
              </Button>
              <Button variant="tertiary" leadingIcon={<IconPlus />}>
                Create
              </Button>
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Trailing Icon</Text>
            <div className="flex flex-wrap gap-3">
              <Button trailingIcon={<IconArrow />}>Continue</Button>
              <Button variant="secondary" trailingIcon={<IconArrow />}>
                Next
              </Button>
              <Button variant="tertiary" trailingIcon={<IconArrow />}>
                More
              </Button>
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Both Icons</Text>
            <div className="flex flex-wrap gap-3">
              <Button leadingIcon={<IconCheck />} trailingIcon={<IconArrow />}>
                Approve & Continue
              </Button>
              <Button
                variant="secondary"
                leadingIcon={<IconPlus />}
                trailingIcon={<IconArrow />}
              >
                Add & Next
              </Button>
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
              <Button disabled text="Disabled Primary" />
              <Button variant="secondary" disabled text="Disabled Secondary" />
              <Button variant="tertiary" disabled text="Disabled Tertiary" />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Loading</Text>
            <div className="flex flex-wrap gap-3">
              <Button loading text="Loading Primary" />
              <Button variant="secondary" loading text="Loading Secondary" />
              <Button variant="tertiary" loading text="Loading Tertiary" />
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-2">Loading with Icons (Icons Hidden)</Text>
            <div className="flex flex-wrap gap-3">
              <Button loading leadingIcon={<IconCheck />}>
                Processing
              </Button>
              <Button
                variant="secondary"
                loading
                trailingIcon={<IconArrow />}
              >
                Submitting
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Combinations */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Common Combinations
        </Text>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button size="lg" leadingIcon={<IconPlus />} text="Create New" />
            <Button variant="secondary" size="md" leadingIcon={<IconCheck />} text="Save Changes" />
            <Button variant="tertiary" size="sm" text="Cancel" />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" trailingIcon={<IconArrow />} text="Get Started" />
            <Button variant="secondary" size="md" text="View Details" />
            <Button variant="tertiary" size="sm" text="Skip" />
          </div>
        </div>
      </div>
    </div>
  );
}

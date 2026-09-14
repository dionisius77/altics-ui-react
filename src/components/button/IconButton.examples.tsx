import { Text } from "../typography/Text";
import { IconButton } from "./IconButton";

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

export function IconButtonExamples() {
  return (
    <div className="space-y-10 p-6">
      {/* Variants */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Variants
        </Text>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <IconButton variant="primary" icon={<IconPlus />} aria-label="Add" />
            <IconButton variant="secondary" icon={<IconCheck />} aria-label="Confirm" />
            <IconButton variant="tertiary" icon={<IconCheck />} aria-label="Close" />
            <IconButton variant="link-color" icon={<IconArrow />} aria-label="Next" />
            <IconButton variant="link-gray" icon={<IconPlus />} aria-label="Add" />
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
            <IconButton size="xs" icon={<IconPlus />} aria-label="Add extra small" />
            <IconButton size="sm" icon={<IconPlus />} aria-label="Add small" />
            <IconButton size="md" icon={<IconPlus />} aria-label="Add medium" />
            <IconButton size="lg" icon={<IconPlus />} aria-label="Add large" />
            <IconButton size="xl" icon={<IconPlus />} aria-label="Add extra large" />
          </div>
        </div>
      </div>

      {/* All Variant/Size Combinations */}
      <div>
        <Text size="lg" weight="bold" className="mb-4">
          Variant & Size Combinations
        </Text>
        <div className="space-y-6">
          {/* Primary */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Primary
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton variant="primary" size="xs" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="primary" size="sm" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="primary" size="md" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="primary" size="lg" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="primary" size="xl" icon={<IconPlus />} aria-label="Add" />
            </div>
          </div>

          {/* Secondary */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Secondary
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton variant="secondary" size="xs" icon={<IconCheck />} aria-label="Confirm" />
              <IconButton variant="secondary" size="sm" icon={<IconCheck />} aria-label="Confirm" />
              <IconButton variant="secondary" size="md" icon={<IconCheck />} aria-label="Confirm" />
              <IconButton variant="secondary" size="lg" icon={<IconCheck />} aria-label="Confirm" />
              <IconButton variant="secondary" size="xl" icon={<IconCheck />} aria-label="Confirm" />
            </div>
          </div>

          {/* Tertiary */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Tertiary
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton variant="tertiary" size="xs" icon={<IconCheck />} aria-label="Close" />
              <IconButton variant="tertiary" size="sm" icon={<IconCheck />} aria-label="Close" />
              <IconButton variant="tertiary" size="md" icon={<IconCheck />} aria-label="Close" />
              <IconButton variant="tertiary" size="lg" icon={<IconCheck />} aria-label="Close" />
              <IconButton variant="tertiary" size="xl" icon={<IconCheck />} aria-label="Close" />
            </div>
          </div>

          {/* Link Color */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Link Color
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton variant="link-color" size="xs" icon={<IconArrow />} aria-label="Next" />
              <IconButton variant="link-color" size="sm" icon={<IconArrow />} aria-label="Next" />
              <IconButton variant="link-color" size="md" icon={<IconArrow />} aria-label="Next" />
              <IconButton variant="link-color" size="lg" icon={<IconArrow />} aria-label="Next" />
              <IconButton variant="link-color" size="xl" icon={<IconArrow />} aria-label="Next" />
            </div>
          </div>

          {/* Link Gray */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Link Gray
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton variant="link-gray" size="xs" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="link-gray" size="sm" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="link-gray" size="md" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="link-gray" size="lg" icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="link-gray" size="xl" icon={<IconPlus />} aria-label="Add" />
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
          {/* Disabled */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Disabled
            </Text>
            <div className="flex flex-wrap gap-3">
              <IconButton variant="primary" disabled icon={<IconPlus />} aria-label="Add" />
              <IconButton variant="secondary" disabled icon={<IconCheck />} aria-label="Confirm" />
              <IconButton variant="tertiary" disabled icon={<IconCheck />} aria-label="Close" />
            </div>
          </div>

          {/* Loading */}
          <div>
            <Text size="sm" weight="medium" className="mb-3">
              Loading
            </Text>
            <div className="flex flex-wrap gap-3">
              <IconButton variant="primary" loading icon={<IconPlus />} aria-label="Processing" />
              <IconButton variant="secondary" loading icon={<IconCheck />} aria-label="Processing" />
              <IconButton variant="tertiary" loading icon={<IconCheck />} aria-label="Processing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

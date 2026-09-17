import { useState } from "react";
import { cn } from "../../lib/cn";
import { EyeIcon, EyeOffIcon } from "../icon/icons";
import { Input, type InputProps } from "./Input";

export type PasswordInputProps = Omit<InputProps, "type" | "trailing"> & {
  /**
   * Initial visibility, for uncontrolled use
   * @default false
   */
  defaultVisible?: boolean;

  /**
   * Visibility. Give this and `onVisibleChange` to control it yourself
   * @default undefined
   */
  visible?: boolean;

  /**
   * Runs with the next visibility whenever the toggle is pressed
   * @default undefined
   */
  onVisibleChange?: (visible: boolean) => void;
};

/**
 * Password box with a visibility toggle.
 *
 * The toggle takes the trailing slot, so the help marker stands down. The
 * value is always plain text; only the input's `type` changes.
 *
 * @example
 * <PasswordInput placeholder="Password" />
 *
 * @example
 * // Driven from outside
 * <PasswordInput visible={shown} onVisibleChange={setShown} />
 */
export function PasswordInput({
  defaultVisible = false,
  visible,
  onVisibleChange,
  disabled,
  ...props
}: PasswordInputProps) {
  const [uncontrolledVisible, setUncontrolledVisible] = useState(defaultVisible);
  const isVisible = visible ?? uncontrolledVisible;

  function toggle() {
    const next = !isVisible;
    if (visible === undefined) setUncontrolledVisible(next);
    onVisibleChange?.(next);
  }

  const ToggleIcon = isVisible ? EyeOffIcon : EyeIcon;

  return (
    <Input
      type={isVisible ? "text" : "password"}
      helpIcon={false}
      disabled={disabled}
      trailing={
        <button
          type="button"
          onClick={toggle}
          disabled={disabled}
          aria-pressed={isVisible}
          aria-label={isVisible ? "Hide password" : "Show password"}
          className={cn(
            "rounded-sm text-neutral-400 transition-colors",
            "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          <ToggleIcon size={16} />
        </button>
      }
      {...props}
    />
  );
}
PasswordInput.displayName = "PasswordInput";

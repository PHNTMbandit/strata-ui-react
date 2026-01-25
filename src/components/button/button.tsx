import { cn } from "@/utils/cn"
import { type ButtonExtendedProps, buttonVariants } from "./button.types"

/**
 * @fileoverview Button component - A versatile, accessible button component for the Suwa UI design system
 * @author PHNTMbandit
 * @version 1.0.0
 * @since 1.0.0
 * @license MIT
 */

/**
 * @summary A comprehensive button component with extensive customization options
 * @description
 * A versatile, accessible button component with multiple visual variants and sizes.
 * Built with accessibility-first principles, this component supports WCAG 2.1 AA standards,
 * keyboard navigation, screen readers, and provides comprehensive theming capabilities.
 *
 * @function
 * @public
 * @memberof SuwaUI
 * @name Button
 *
 * @param {"primary"|"secondary"|"accent"|"neutral"|"error"|"success"|"warning"|"glass"} [props.tone="primary"] - The color theme variant of the button for semantic meaning
 * @param {"solid"|"outline"|"ghost"} [props.style="solid"] - The visual style variant affecting background and borders
 * @param {"small"|"medium"|"large"|"iconSmall"|"iconMedium"|"iconLarge"} [props.size="medium"] - The size variant controlling dimensions and typography
 *
 * @returns {React.ReactElement<HTMLButtonElement>} A fully accessible and styled HTML button element
 *
 * @example
 * // Basic button usage
 * <Button>Click me</Button>
 *
 * @example
 * // Primary call-to-action button
 * <Button tone="primary" size="large" onClick={handleSubmit}>
 *   Submit Form
 * </Button>
 *
 * @example
 * // Secondary action with outline style
 * <Button tone="secondary" style="outline" onClick={handleCancel}>
 *   Cancel
 * </Button>
 *
 * @example
 * // Icon-only button (requires aria-label for accessibility)
 * <Button
 *   size="iconMedium"
 *   aria-label="Add new item"
 *   onClick={handleAdd}
 * >
 *   <PlusIcon />
 * </Button>
 *
 * @example
 * // Destructive action button
 * <Button tone="error" style="solid" onClick={handleDelete}>
 *   Delete Account
 * </Button>
 *
 * @example
 * // Disabled button state
 * <Button disabled onClick={handleAction}>
 *   Processing...
 * </Button>
 *
 * @example
 * // Glass morphism effect button
 * <Button tone="glass" style="solid">
 *   Glass Effect
 * </Button>
 *
 * @example
 * // Form submission button
 * <Button type="submit" tone="primary">
 *   Submit
 * </Button>
 *
 * @see {@link ButtonExtendedProps} - For detailed prop interface documentation
 * @see {@link buttonVariants} - For styling variant configurations
 * @see {@link https://www.w3.org/WAI/WCAG21/Understanding/} - WCAG 2.1 accessibility guidelines
 *
 *
 * @default tone "primary"
 * @default style "solid"
 * @default size "medium"
 *
 * @access public
 * @readonly
 * @since 1.0.0
 * @version 1.0.0
 */
export function Button({
	className,
	children,
	tone = "primary",
	style = "solid",
	size = "medium",
	...props
}: ButtonExtendedProps): React.ReactElement<HTMLButtonElement> {
	const hasVisibleText =
		children && typeof children === "string" && children.trim().length > 0
	const hasAriaLabel =
		props["aria-label"] && props["aria-label"].trim().length > 0
	const hasAriaLabelledby = props["aria-labelledby"]
	const hasTitle = props.title && props.title.trim().length > 0
	const accessibilityProps = {
		...props,
		"aria-label": hasAriaLabel
			? props["aria-label"]
			: !hasVisibleText && !hasAriaLabelledby && !hasTitle
				? "Button"
				: props["aria-label"],
	}

	return (
		<button
			className={cn(buttonVariants({ tone, style, size, className }))}
			{...accessibilityProps}
		>
			{children}
		</button>
	)
}

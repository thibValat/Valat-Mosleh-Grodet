import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ComponentProps } from "react";
import { FieldPath, FieldValues } from "react-hook-form";

type FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ComponentProps<typeof FormField<TFieldValues, TName>>, "render"> & {
  label: string;
  InputProps?: Pick<ComponentProps<typeof Input>, "placeholder" | "type">;
};

export default function FormInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  InputProps,
  ...FormFieldProps
}: FormInputProps<TFieldValues, TName>) {
  return (
    <FormField
      {...FormFieldProps}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...InputProps} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

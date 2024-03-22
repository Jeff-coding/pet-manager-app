import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";


const invoiceItemVariants = cva("border border-slate-100 rounded-lg p-6", {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      error: 'bg-red-200 text-foreground'
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

const InvoiceItem = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(invoiceItemVariants({ variant }), className)}
  {...props}
  />
))
InvoiceItem.displayName = "InvoiceItem"

const InvoiceItemTitle = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-2 leading-none tracking-tight font-bold", className)}
  {...props}
  />
))
InvoiceItemTitle.displayName = "InvoiceItemTitle"

const InvoiceItemDate = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-slate-600", className)}
  {...props}
  />
))
InvoiceItemDate.displayName = "InvoiceItemDate"

const InvoiceItemUser = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-slate-600", className)}
  {...props}
  />
))
InvoiceItemUser.displayName = "InvoiceItemUser"


export { InvoiceItem, InvoiceItemTitle, InvoiceItemDate, InvoiceItemUser }
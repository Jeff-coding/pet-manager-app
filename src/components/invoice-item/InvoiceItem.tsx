import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";


const invoiceItemVariants = cva("border rounded-lg p-6 mb-4 cursor-pointer transition-all", {
  variants: {
    variant: {
      default: 'bg-background text-foreground hover:bg-slate-50 hover:shadow-md hover:border-transparent hover:-translate-y-px',
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

const InvoiceItemIcon = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('float-left mr-3', className)}
  {...props}
  />
))
InvoiceItemIcon.displayName = "InvoiceItemIcon"

const InvoiceItemTitle = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("font-semibold mt-0.5", className)}
  {...props}
  />
))
InvoiceItemTitle.displayName = "InvoiceItemTitle"

const InvoiceItemDetails = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("flex items-center justify-between", className)}
  {...props}
  />
))
InvoiceItemDetails.displayName = "InvoiceItemDetails"

const InvoiceItemDate = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-slate-400 text-sm", className)}
  {...props}
  />
))
InvoiceItemDate.displayName = "InvoiceItemDate"

const InvoiceItemUser = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof invoiceItemVariants>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-slate-400 text-sm ml-auto", className)}
  {...props}
  />
))
InvoiceItemUser.displayName = "InvoiceItemUser"


export { 
  InvoiceItem, 
  InvoiceItemTitle, 
  InvoiceItemDetails, 
  InvoiceItemDate, 
  InvoiceItemUser,
  InvoiceItemIcon
}